import { NextResponse } from "next/server";
export async function POST() {  
      // const client = new OpenAI({

      //   baseURL: "https://huggingface.co/api/inference-proxy/together",
      //   apiKey: process.env.OPENAI_API_KEY;
      // });

      // const chatCompletion = await client.chat.completions.create({
      //   model: "deepseek-ai/DeepSeek-R1",
      //   messages: [
      //     {
      //       role: "user",
      //       content: "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment."
      //     }
      //   ],
      //   max_tokens: 500
      // });

      // console.log(chatCompletion.choices[0].message);
      // const answer = chatCompletion.choices[0]?.message?.content || "No response";

      // return NextResponse.json({ answer });
      
  return NextResponse.json(
     {messages: [
        {
          role: "assistant",
          content: "What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?",
       }
      ],}
    );
}
// All the AI found where paid and I have exhausted all there limits so have commented them AI implemented succesfully were:
// Together Ai
// Huging Face
