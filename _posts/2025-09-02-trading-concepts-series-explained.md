---
title: "Trading Concepts Explained: What is a Series?"
layout: post
date: 2025-09-02
tags: [trading, series, indicators, concepts, education]
permalink: /trading-concepts-series-explained/
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
- Traders often confuse “series” with “indicators.”  
- Think of a **series** as the raw input time-stream that indicators chew on.  
- Hook: understanding series = understanding the foundation of every chart study.  

---

## 📊 What a Series Actually Is
- Ordered array of numbers, aligned to chart candles.  
- Common examples:  
  - Close, Open, High, Low  
  - HL2 = (H+L)/2  
  - HLC3 = (H+L+C)/3  
  - OHLC4 = (O+H+L+C)/4  
  - Typical Price = (H+L+C)/3  
  - Volume (when indicator uses it).  

---

## 📍 Where a Series Lives
- Scoped by **context**: symbol, timeframe, session.  
- Example: `Close @ SBIN, 5m, NSE Regular Session`.  
- Change the context → you change the data stream feeding your indicator.  

---

## 🛠️ Why the UI Asks for Series
- Many indicators = generic math functions.  
- Example: RSI(period, series).  
- You decide → RSI of Close, RSI of HL2, RSI of EMA(Close)…  
- Flexibility = more powerful analysis.  

---

## 🔗 Chaining Series (The Superpower)
- A series can come from another block’s output.  
- Example: `EMA( RSI(Close), 9 )` → RSI(Close) becomes the input series for EMA.  
- UX tip:  
  - Default: show base price series (Close, Open, etc.).  
  - Option: “Use output from previous block…” to enable piping.  

---

## ⚠️ Edge Cases to Handle
- **Warm-up / NaNs**:  
  - Any indicator with period = N needs at least N bars.  
  - First N–1 outputs = undefined.  
  - Validator should warn if data window too short.  
- **Units / scale**:  
  - Keep metadata (price, %, σ, points).  
  - Never compare apples to oranges (e.g., % vs ₹) without a transform.  

---

## 🕒 Multi-Timeframe Notes
- Advanced feature: `series@higherTF`.  
- Needs timestamp alignment → careful downsample/upsample rules.  
- For v1: stick to single-TF, it avoids subtle bugs.  

---

## 💡 Bottom Line
- Series ≠ indicator list.  
- It’s the **signal line** an indicator reads.  
- Mastering “series” means you understand what every technical study is *built on*.  

---
