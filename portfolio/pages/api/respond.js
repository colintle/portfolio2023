import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { pinecone } from '@/utils/pineconeClient';
import { OpenAI } from 'langchain/llms/openai';
import { ConversationalRetrievalQAChain } from 'langchain/chains';

const CONDENSE_PROMPT = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`;

const QA_PROMPT = `You are a helpful AI assistant. Use the following pieces of context to answer the question at the end.
If you don't know the answer, just say you don't know. DO NOT try to make up an answer.
If the question is not related to Colin's professional experience, politely respond that you are tuned to only answer questions that are related to Colin's professional experience.
If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.

{context}

Question: {question}
Helpful answer in markdown:`;

export default async function handler(req, res){
    const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME
    const PINECONE_NAME_SPACE = process.env.PINECONE_NAME_SPACE
    const {question, history} = req.body;

    if (!question) {
        return res.status(400).json({ message: 'No question in the request' });
    }

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    const trimmed = question.trim().replaceAll("\n", " ")

    try{
        const index = pinecone.Index(PINECONE_INDEX_NAME);

        const vectorStore = await PineconeStore.fromExistingIndex(
            new OpenAIEmbeddings({}),
            {
              pineconeIndex: index,
              textKey: 'text',
              namespace: PINECONE_NAME_SPACE, //namespace comes from your config folder
            },
        );

        const model = new OpenAI({
            temperature: 0,
            modelName: 'gpt-3.5-turbo',
            streaming: true,
            callbacks: [
              {
                handleLLMNewToken(token){
                    // console.log(1)
                    res.write(token);
                }
              }
            ]
        });

        const chain = ConversationalRetrievalQAChain.fromLLM(
            model,
            vectorStore.asRetriever(),
            {
              qaTemplate: QA_PROMPT,
              questionGeneratorTemplate: CONDENSE_PROMPT,
            },
        );

        await chain.call({
            question: trimmed,
            chat_history: history || [],
        });

        res.end();

    }
    catch(error)
    {
        console.log(error)
        res.status(500).json({error: error.message})
    }
}