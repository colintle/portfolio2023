import { Pinecone } from '@pinecone-database/pinecone';
import { Configuration, OpenAIApi } from 'openai';

const QA_PROMPT = `You are a helpful AI assistant. Use the following pieces of context to answer the question at the end.
If you don't know the answer, just say you don't know. DO NOT try to make up an answer.
If the question is not related to Colin's professional experience, politely respond that you are tuned to only answer questions that are related to Colin's professional experience.
If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.

Question: {question}
`;

export async function POST(req, res) {
  const {question, _} = await req.json();

  const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME
  const PINECONE_NAME_SPACE = process.env.PINECONE_NAME_SPACE
  const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY
  });
  const index = pinecone.Index(PINECONE_INDEX_NAME);

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const trimmed = question.trim().replaceAll("\n", " ")

  let response = await openai.createEmbedding({
    model: 'text-embedding-ada-002',
    input: question,
  });

  const embedding = response.data.data[0].embedding;

  const queryResponse = await index.namespace(PINECONE_NAME_SPACE).query({
    topK: 3,
    vector: embedding,
    includeValues: true,
    includeMetadata: true,
  });

  const context = queryResponse.matches.map((match) => match.metadata.text).join('\n');

  console.log(context)

 response = await openai.createChatCompletion({
  model: "gpt-4",
  temperature: 0,
  messages: [
    {
      role: "system",
      content: QA_PROMPT.replace("{question}", question)
    },
    {
      role: "system",
      content: `Here is the context from which you can answer ${context}`
    }
  ],
  stream: true,
}, { responseType: 'stream' });

const stream = new ReadableStream({
  async start(controller) {
    let buffer = '';

    response.data.on("data", data => {
      buffer += data.toString(); 
      processBuffer();
    });

    response.data.on("end", () => {
      setTimeout(() => {
        console.log('\nStream done');
        controller.close();
    }, 100);
    });

    function processBuffer() {
      while (true) {
        const endOfMessageIndex = buffer.indexOf("\n\n");
        if (endOfMessageIndex === -1) return;

        const message = buffer.substring(0, endOfMessageIndex);
        buffer = buffer.substring(endOfMessageIndex + 2);

        if (message.includes('[DONE]')) {
          console.log("inside done")
          return;
        }

        if (message.startsWith("data:") && !message.includes(`"role":"assistant"`)) {
          try {
            const jsonMessage = JSON.parse(message.replace("data: ", ""));
            const chunk = jsonMessage.choices[0].delta?.content;
            if (chunk) {
              controller.enqueue(new TextEncoder().encode(chunk));
            }
          } catch (error) {
            console.error(`Error processing JSON from buffer with message: ${message}\n${error}`);
          }
        }
      }
    }
  }
});

return new Response(stream, {
  headers: {
    'Content-Type': 'text/plain',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  }
});

}