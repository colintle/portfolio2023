import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { makeChain } from '@/utils/makeChain';
import { pinecone } from '@/utils/pineconeClient';

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

        const chain = makeChain(vectorStore);

        const response = await chain.call({
            question: trimmed,
            chat_history: history || [],
        });

        res.status(200).json(response);

    }
    catch(error)
    {
        console.log(error)
        res.status(500).json({error: error.message})
    }
}