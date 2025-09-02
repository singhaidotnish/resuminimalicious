---
title: "Using AI in episodic animation pipelines"
layout: post
date: 2025-08-15
tags: [chatgpt, react, trading, builder, coding]
permalink: /how-i-built-a-condition-builder-using-chatgpt-and-react/
categories: blog
read_time: true
toc: true
toc_label: "On this page"
share: false
comments: true
related: true
visible: true
---
## 🌟 Introduction
- Problem: building a flexible condition-builder for trading rules.  
- Why I asked ChatGPT for help.  
- Hook: AI + React made it possible faster than I expected.  

---

## 🧠 The Challenge
- Needed nested condition blocks (if–else, AND/OR, groups).  
- Hard to code from scratch without clear blueprint.  
- Goal: a UI that even non-devs could use.  

---

## 🤖 How ChatGPT Helped
- Prompting ChatGPT with “explain + code sample.”  
- Iterating on JSON structures (RootGroupNode, ChooseBlock, etc.).  
- Debugging logic → refining prompts until output worked.  

---

## ⚛️ React Implementation
- Component structure (ConditionBuilder → Group → Block).  
- State management with hooks.  
- JSON export for backend integration.  
- UI design → minimal, intuitive, drag/drop style.  

---

## 🧪 Testing & Iteration
- Tried with small test conditions first.  
- Nested conditions tested against mock trading rules.  
- Integration with backend (FastAPI).  

---

## 💡 Lessons Learned
- ChatGPT ≠ perfect code → but excellent “pair programmer.”  
- Breaking down into prompts + iterations was key.  
- Future: add drag-and-drop UI, AI-suggested conditions.  

---

## 🙏 Closing Thoughts
- Reflection on using AI not just for answers but collaboration.  
- Encouragement: try building your own tools with small AI-guided steps.  
