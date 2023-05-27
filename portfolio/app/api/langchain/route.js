import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { PineconeClient } from '@pinecone-database/pinecone';
import { OpenAI } from 'langchain/llms/openai';
import { ConversationalRetrievalQAChain } from 'langchain/chains';
import { CallbackManager } from "langchain/callbacks";

import { NextResponse } from "next/server";

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

export async function POST(req) {
  const {question, history} = await req.json();

  const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME
  const PINECONE_NAME_SPACE = process.env.PINECONE_NAME_SPACE

  const encoder = new TextEncoder();
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();

  console.log("Got the streamer")

  const trimmed = question.trim().replaceAll("\n", " ")

  const pinecone = new PineconeClient();
  
  await pinecone.init({
    environment: process.env.PINECONE_ENVIRONMENT ?? '',
    apiKey: process.env.PINECONE_API_KEY ?? '',
  });

  console.log("init of pinecone")

  const index = pinecone.Index(PINECONE_INDEX_NAME);

  console.log("Got the index")

  const vectorStore = await PineconeStore.fromExistingIndex(
      new OpenAIEmbeddings({}),
      {
        pineconeIndex: index,
        textKey: 'text',
        namespace: PINECONE_NAME_SPACE, //namespace comes from your config folder
      },
  );

  console.log('Got the vectorStore')

  const model = new OpenAI({
    temperature: 0,
    modelName: 'gpt-3.5-turbo',
    streaming: true,
    callbackManager: CallbackManager.fromHandlers({
      handleLLMNewToken: async (token) => {
          await writer.ready;
          await writer.write(encoder.encode(`${token}`));
      },
      handleLLMEnd: async () => {
          await writer.ready;
          await writer.close();
      },
      handleLLMError: async (e) => {
          await writer.ready;
          await writer.abort(e);
      },
  }),
  });

  console.log("Got the model")

  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever(),
    {
      qaTemplate: QA_PROMPT,
      questionGeneratorTemplate: CONDENSE_PROMPT,
    },
  );

  console.log("Got the chain")

  chain.call({
    question: trimmed,
    chat_history: history || [],
  });

  console.log("Chain called")

  return new NextResponse(stream.readable, {
    headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
    },
  });
}