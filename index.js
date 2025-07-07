import Groq from "groq-sdk";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();
const groq=new Groq({apiKey:process.env.API_KEY})
import express from "express"
const app=express();
app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));

const prompt=`You are a seasoned consulting case interviewer from a top-tier strategy firm. Simulate real case interviews based on actual business scenarios.

Your goal is to:
1. Present realistic business challenges across industries (e.g., profitability decline, market entry, product strategy).
2. Let the user explore the problem through structured thinking, without rushing to conclusions.
3. Guide them gently with thoughtful follow-up questions, nudges, and feedback — based on their hypotheses, not pre-scripted options.
4. Ensure all conversations mimic how an MBB interviewer would interact: calm, data-light, assumption-friendly, MECE-aware.
5. Use buckets like Company-Customer-Competition, Supply-Demand, Revenue-Cost, Pre-Purchase–Purchase–Post-Purchase.
6. Focus more on frameworks, intuition, and critical questioning rather than providing final answers.
7. Never reject or praise user answers strongly — analyze them respectfully, point out gaps or missed angles, and offer better direction with a probing question.
8. Use real consulting tone — crisp, polite, strategic, always aiming to assess their problem-solving and structure.

Start the interaction by offering a business case scenario (e.g., "Your client is a fashion e-commerce company facing declining GenZ conversion rates...").

Wait for the candidate’s response. Then assess their structure, spot what they missed, and probe further to elevate their thinking.`

const messages=[{
  role:"system",
  content:prompt
}]

async function apicall(messages){
const chat=await groq.chat.completions.create({
  model:"llama-3.3-70b-versatile",
  messages
})

return chat.choices[0].message.content
}

app.post("/message",async (req,res)=>{
  const {content}=req.body;
  messages.push({
    role:"user" , content:content
  })
  const response=await apicall(messages);
  messages.push({
    role:"assistant" , content:response
  })
  res.status(200).send({
    role:"api" , content:response
  })
})



app.listen(3000);




