# hangout-reccomender


A mini AI-powered app that recommends three local hangout spots in Dubai based on your current vibe.


---

## Features

- **REST API** with Express & TypeScript  
- **LangChain.js** powering the LLM integration  
- **Tailwind CSS** front-end with gradient, animations, and sleek cards  
- **Deploy via GitHub Codespaces**—no external hosting needed  
- Well-structured code and clear README for easy onboarding

---

## Live Preview via Codespaces

1. **Open** this repository in GitHub Codespaces.  
2. In the Codespaces terminal, run:
   ```bash
   npm run dev

In the bottom Ports panel, find 3000, click the globe 🌐 icon to make it public, and then click Open in Browser.

Share the generated URL (e.g. https://3000-abc123.githubpreview.dev) with anyone—they can instantly try your app.

Getting Started Locally
If you prefer running locally:

Clone this repo:

```bash
    git clone https://github.com/<your-username>/dubai-hangout-recommender.git
    cd dubai-hangout-recommender
```

Install dependencies:

```bash
    npm install
```
Create a .env file in the project root with your API key:

```text
    HUGGINGFACEHUB_API_KEY=hf_XXXXXXXXXXXXXXXXXXXX

 or if using OpenAI:

    OPENAI_API_KEY=sk-XXXXXXXXXXXXXXXXXXXX
```
Run in development mode:

```bash
    npm run dev
```
Open http://localhost:3000 in your browser.

Project Structure

```pgsql
.
├── public/
│   └── index.html       # Tailwind UI + front-end logic
├── src/
│   ├── recommend.ts     # LangChain + model integration
│   ├── server.ts        # Express REST API
│   └── types.ts         # TypeScript interfaces
├── .env                 # API keys (ignored by Git)
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```
Scripts


npm run dev
Builds and runs the server in one step (ideal for Codespaces).


npm run build
Compiles TypeScript into dist/.


npm start
Runs the compiled server (node dist/server.js).

Environment Variables

HUGGINGFACEHUB_API_KEY — Your Hugging Face Inference API key

OPENAI_API_KEY — (Optional) Your OpenAI API key, if you switch models

Remember not to commit your .env or API keys.

Deployment Options
GitHub Codespaces: Follow the “Live Preview” steps above—-instant sharing.


Acknowledgments
LangChain.js

Tailwind CSS

Hugging Face Inference API

Enjoy building—and sharing—your Dubai Hangout Recommender! 