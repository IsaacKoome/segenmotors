
// app/api/chat/route.ts
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { allCars } from '@/lib/carData'; // Import car data

// Function to get the full path to the knowledge base file
const getKnowledgeBasePath = () => {
  // Go up from app/api/chat to the project root
  return path.join(process.cwd(), 'knowledge-base', 'company-info.md');
};


export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const geminiApiKey = process.env.GEMINI_API_KEY;

    if (!geminiApiKey) {
      return NextResponse.json({ error: 'GEMINI_API_KEY is not set' }, { status: 500 });
    }

    // Read the knowledge base file
    const knowledgeBasePath = getKnowledgeBasePath();
    const knowledgeBase = fs.readFileSync(knowledgeBasePath, 'utf-8');

    // Convert car data to a string for the prompt
    const carInventory = JSON.stringify(allCars, null, 2);

    const genAI = new GoogleGenerativeAI(geminiApiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Augment the prompt with the knowledge base and car inventory
    const augmentedPrompt = `
      You are a helpful and friendly AI assistant for Segen Motors.
      Your goal is to assist users with their car buying journey.

      You have access to the following information about Segen Motors:
      ---
      ${knowledgeBase}
      ---

      You also have access to the current car inventory:
      ---
      ${carInventory}
      ---

      When a user asks for car recommendations, or mentions their budget, use the car inventory data to provide suggestions.
      - Ask for the user's budget if they haven't mentioned it.
      - Recommend cars that are within the user's budget.
      - You can also ask clarifying questions to better understand the user's needs (e.g., what type of car are you looking for? Any specific features?).

      When answering questions, use the information provided above.
      If the information is not in the document, you can say that you don't have that information.

      Here is the user's question:
      ---
      ${prompt}
    `;

    const result = await model.generateContent(augmentedPrompt);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error) {
    console.error('Gemini API error:', error);
    return NextResponse.json({ error: 'Failed to communicate with Gemini API' }, { status: 500 });
  }
}

