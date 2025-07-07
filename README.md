# 🧠 Consulting Case Interview Bot

An interactive, AI-powered mock interview experience designed to help you **practice consulting case interviews** just like MBB firms (McKinsey, BCG, Bain).

> 💡 Powered by LLaMA 3 via Groq and built with React + Express.

---

## 🌐 Live Demo

👉 **Try it out now:** [https://consulting-bot.netlify.app/](https://consulting-bot.netlify.app/)

---

## 🎯 Features

- 🧠 Simulates real consulting case interviews (profitability, market entry, etc.)
- 🎙️ Voice input (Speech-to-Text with Web Speech API)
- 💬 Natural AI follow-ups and feedback like a real interviewer
- 📱 Fully responsive and modern dark-themed UI
- 🚀 Fast backend served on Render, using Groq’s ultra-fast inference API

---

## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- Axios
- Web Speech API
- Netlify (for deployment)

**Backend:**
- Node.js + Express
- Groq SDK (LLaMA 3 API)
- Render (for deployment)

---

## 🧪 Example Prompt

> “Your client is a fashion e-commerce company facing declining GenZ conversion rates. How would you structure your analysis?”

The bot will assess your reply, guide you with structured thinking, and simulate a real-time case interview experience.

---

## 📦 Setup Instructions

### 🔧 Backend
```bash
cd backend
npm install
# Add your GROQ_API_KEY in a .env file
node index.js
