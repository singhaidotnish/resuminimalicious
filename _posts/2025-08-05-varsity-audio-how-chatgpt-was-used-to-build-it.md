---
title: "Varsity Audio – how ChatGPT was used to build it"
layout: single
tags: [ai, chatgpt, tts, tools, audio, education]
date: 2025-08-05
categories: blog
permalink: /varsity-audio-how-chatgpt-was-used-to-build-it/
read_time: true
toc: true
toc_label: "On this page"
share: false
comments: true
related: true
visible: false
---

## 🎧 What You Can Gain from Varsity Audio

- Learn financial concepts while walking, commuting, or relaxing
- No need to read long text on screen — just listen
- Perfect for auditory learners
- Helps revise Zerodha Varsity content on-the-go
- Available in lightweight formats (MP3)


## 💡 Why I Built Varsity Audio

- I wanted to **convert quality educational content into audio** without using bloated or commercial apps
- Many people struggle with reading long-form financial education content
- Existing podcasts didn't follow the structure of Varsity chapters
- I wanted to explore how far **ChatGPT + TTS tools** can go for building real learning aids


## 🛠 Tools and Stack Behind the Project

- **Frontend:** React + Tailwind + Vite
- **Backend:** Node.js + Express (API endpoints for uploads and data)
- **Storage:** Audio files hosted on Cloudinary
- **Text-to-Speech:** Used ChatGPT to generate clean narration-ready text, piped to Google TTS or other TTS APIs
- **Admin Panel:** Simple form to upload chapter title, content, tags, and audio file
- **Deployment:** Render.com for backend + frontend split


## 🤖 How ChatGPT Helped Along the Way

- Brainstormed initial UI and project layout
- Helped debug issues in React and Express
- Generated placeholder content and descriptions
- Refined audio tone and formatting for TTS
- Suggested ways to structure JSON data for chapters
