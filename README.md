# Sairam Veereddy Realtime Voice Portfolio

This project is now structured like the reference you showed: a realtime voice agent that
can speak as Sairam and control the website while explaining the resume.

## What We Are Building

```text
Visitor speaks
  -> browser sends microphone audio through WebRTC
  -> OpenAI Realtime model answers in natural speech
  -> model calls a website tool like navigate_site({ target: "cvs" })
  -> browser scrolls and highlights that section
  -> agent keeps explaining the resume
```

## Step 1: Get An OpenAI API Key

Create an API key from the OpenAI dashboard. Do not put the key in frontend JavaScript.
The key must live only in the backend server.

## Step 2: Run The Realtime Backend In PowerShell

The old `server.ps1` is only a static file server. It cannot power realtime voice.
Use the Node server for the real voice agent:

```powershell
cd C:\Users\vsair\Documents\Codex\2026-05-07\i-want-to-build-a-portfolio
.\start-realtime.ps1 -OpenAIKey "sk-your-real-key-here"
```

Then open:

```text
http://localhost:4174
```

The launcher uses port `4174` because port `4173` may still be used by the old static
PowerShell server. To choose another port:

```powershell
.\start-realtime.ps1 -OpenAIKey "sk-your-real-key-here" -Port 4175
```

Then open `http://localhost:4175`.

## Step 3: Use It

Click the floating voice button. The browser will ask for microphone permission.

Try saying:

- "Walk me through your resume."
- "Tell me about CVS."
- "Show me your GenAI projects."
- "Explain the Text-to-SQL copilot."
- "What skills do you have?"
- "How do I contact you?"

The agent should speak and move the page at the same time.

## Files That Matter

- `server.mjs` - secure backend that creates OpenAI Realtime sessions
- `app.js` - browser WebRTC client and page-control tool executor
- `knowledge-base.js` - structured resume data used by the page
- `index.html` - sections the AI can control
- `styles.css` - visual layout

## How Site Control Works

The backend gives the realtime model a function tool:

```js
navigate_site({ target: "cvs", reason: "User asked about CVS experience" })
```

The browser listens for that tool call on the WebRTC data channel. When it arrives, the
browser runs:

```js
document.getElementById("cvs").scrollIntoView(...)
```

That is the core trick behind the reference experience.

## Current Status

Done:

- Resume knowledge base loaded from your DOCX
- Secure realtime session backend scaffolded
- Browser WebRTC client scaffolded
- AI page-control tool implemented
- Local typed fallback still works if realtime is not configured

Still needed:

- Add your real OpenAI API key locally
- Run the Node server
- Test microphone permission in browser
- Tune voice, answer style, and visual design after the realtime loop works
