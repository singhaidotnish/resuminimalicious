---
title: "Varsity Audio: Why I avoided MongoDB"
layout: single
classes: wide
sidebar:
  nav: "docs"
  sticky: true
  toc: true
  location: right
toc: true
toc_label: "On this page"
toc_sticky: true
date: 2025-08-05
tags: [varsity, mongodb, backend, blog]
author_profile: false
read_time: true
share: true
related: true
permalink: /varsity-audio-why-i-avoided-mongodb/
---



## 🎧 The Varsity Audio Project

The **Varsity Audio** tool was built to make financial education more accessible by converting text-based content into audio, chapter by chapter.

This post explains **why I chose not to use MongoDB**, even though it's a popular default in many full-stack setups.

---

## 💭 My Initial Considerations

- MongoDB is popular with modern MERN stacks  
- JSON-like structure seemed ideal for chapter content  
- Mongoose simplifies schema validation  
- Many tutorials start with MongoDB by default

But I paused and asked myself:

> _Do I really need a full-fledged database for this tool?_  

---

## 🛠 What My Project Actually Needed

- Store chapters (title, text, tags, audio URL)
- Fast read access for frontend
- Occasional updates or edits
- Low complexity, quick deploy
- Version control for chapter data

---

## ❌ MongoDB: Reasons I Skipped It

1. **Unnecessary Complexity**  
   Using MongoDB for storing static or semi-static chapters felt like overkill.

2. **Lock-in Risk**  
   Schemas might evolve, but I didn’t want to commit to one DB tool early.

3. **Extra Setup**  
   Required provisioning a database, managing connection logic, credentials, backups, etc.

4. **Not Git-Friendly**  
   I wanted version control over my content — MongoDB doesn't play well with Git.

---

## ✅ What I Used Instead

### Plain `.json` or `.txt` Files

- Easy to edit
- Committed in Git
- Simple `fs.readFile()` or `fetch()` usage
- Perfect for Render or any static/flat-file backend

---

## 🚀 Future-Proofing Options

- Migrate to MongoDB or SQLite **only when needed**
- Add indexing or caching layers later
- Optional CMS or admin panel to manage `.json` entries

---

## 📝 Takeaway

> _Build for now, scale for later._

Avoiding MongoDB helped me **stay lean and ship fast**.  
For content-first apps like Varsity Audio, simplicity wins.

---

Stay tuned — I’ll publish the code and deployment guide in the next post!

