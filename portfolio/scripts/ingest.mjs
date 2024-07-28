import { Pinecone } from '@pinecone-database/pinecone';
import { Configuration, OpenAIApi } from 'openai';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import dotenv from 'dotenv';
import pdf from 'pdf-parse';

dotenv.config();

const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME;
const PINECONE_NAME_SPACE = process.env.PINECONE_NAME_SPACE;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const pdfFilePath = path.join(path.dirname(new URL(import.meta.url).pathname), '../docs/vectors.pdf');

// Ensure the PDF file exists
if (!fs.existsSync(pdfFilePath)) {
  console.error(`File not found: ${pdfFilePath}`);
  process.exit(1);
}

console.log(`Found PDF file at: ${pdfFilePath}`);

const pinecone = new Pinecone({
  apiKey: PINECONE_API_KEY
});

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function parsePdf(filePath) {
  console.log(`Parsing PDF file: ${filePath}`);
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdf(dataBuffer);
  console.log(`Parsed PDF text length: ${data.text.length}`);
  return data.text;
}

async function generateEmbeddings(text) {
  console.log(`Generating embeddings for text length: ${text.length}`);
  const chunks = text.split(/\r?\n\n/);
  console.log(chunks)
  const embeddings = [];

  for (const chunk of chunks) {
    const response = await openai.createEmbedding({
      model: 'text-embedding-ada-002',
      input: chunk,
    });
    embeddings.push({
      embedding: response.data.data[0].embedding,
      text: chunk
    });
  }

  console.log(`Generated ${embeddings.length} embeddings`);
  return embeddings;
}

async function deleteOldVectors(index) {
  console.log(`Checking for vectors in namespace: ${PINECONE_NAME_SPACE}`);
    const result = await index.namespace(PINECONE_NAME_SPACE).query({
      topK: 1,
      vector: new Array(1536).fill(0),
      includeValues: true,
      includeMetadata: true,
    });

    if (result.matches && result.matches.length > 0) {
        console.log(`Vectors found in namespace: ${PINECONE_NAME_SPACE}, deleting...`);
        await index.namespace(PINECONE_NAME_SPACE).deleteAll();
        console.log(`Deleted all vectors in namespace: ${PINECONE_NAME_SPACE}`);
    } else {
        console.log(`No vectors found in namespace: ${PINECONE_NAME_SPACE}. No deletion necessary.`);
    }
}

async function updatePinecone(index, vectors) {
  console.log(`Upserting ${vectors.length} vectors to Pinecone`);
  await index.namespace(PINECONE_NAME_SPACE).upsert(vectors);
  console.log(`Upserted vectors to Pinecone`);
}

async function processPdf() {
  console.log(`Processing PDF file: ${pdfFilePath}`);
  const index = pinecone.Index(PINECONE_INDEX_NAME);

  await deleteOldVectors(index);

  const text = await parsePdf(pdfFilePath);
  const embeddings = await generateEmbeddings(text);
  const vectors = embeddings.map(data => ({
    id: crypto.randomUUID(),
    values: data.embedding,
    metadata: {
      text: data.text
    }
  }));

  await updatePinecone(index, vectors);
  console.log('Vectors have been successfully updated.');
}

(async () => {
  try {
    await processPdf();
  } catch (error) {
    console.error('Error:', error);
  }
})();
