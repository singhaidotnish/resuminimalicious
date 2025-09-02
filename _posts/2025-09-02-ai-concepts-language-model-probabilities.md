---
title: "How Language Models Actually Work: Parameters, Probabilities, and Interpretability"
layout: post
date: 2025-09-02
tags: [GPT-2, GPT-3, probabilities, ablation, transformer]
permalink: /ai-concepts-language-model-probabilities/
categories: blog
read_time: true
toc: true
toc_label: "On this page"
share: false
comments: true
related: true
visible: true
---


When you read that **GPT-2 small has 82 million parameters** or **GPT-3 has 175 billion**, it feels surreal.  
M means *million*, B means *billion*.  
Yes, these models really pass around that many numbers through their layers every time they generate a single sentence. *Oh my gosh…* 🤯  

But what do all those parameters actually *do*?

---

## 📦 What are Parameters?
Parameters are the **weights** inside the network’s giant matrices.

- GPT-2 small: ~82M  
- GPT-2 medium: ~345M  
- GPT-2 large: ~762M  
- GPT-2 XL: ~1.5B  
- GPT-3: up to 175B  

Each parameter is just a floating-point number. Alone, meaningless. But collectively, they encode patterns learned during training: grammar, facts, styles of text.

---

## 🧠 Encoding Knowledge
When people say a model *“encodes knowledge”*, they don’t mean it memorizes sentences like flashcards.  
It’s more like this:

> The weights are tuned so that, when you feed in *“Paris is the capital of”*, the internal math makes **“France”** pop out with the highest probability.

So *knowledge* is not literal sentences but **probability biases baked into the weights**.

---

## 🎲 Probability Distributions
At each step, the model doesn’t output one word — it outputs a **distribution**: probabilities for *every token* in its vocabulary.

Example for the prompt *“Paris is the capital of”*:

- France → 0.40  
- United States → 0.20  
- Spain → 0.05  
- … (rest spread over thousands of tokens)  

That vector of numbers must sum to 1. It’s the model’s *beliefs* about what could come next.

---

## 🌀 “Flat” vs “Sharp” Distributions
- **Sharp distribution**: one option dominates (France=0.9).  
- **Flat distribution**: multiple plausible options (France=0.3, US=0.2, Spain=0.1).  

Small models like DistilGPT2 tend to be flatter — they’re less confident. Larger models sharpen the distribution because they’ve captured more context and facts.

---

## 🎲 Sampling and Randomness
When generating, you can:

- Always pick the most probable token (deterministic, “greedy”).  
- Or **sample**: roll the dice according to probabilities. That gives variety — sometimes you’ll get “France,” sometimes “US.”  

This is why, even with the same prompt, you can get very different continuations.

**Temperature** controls this randomness:

- Low temperature (<1) → sharper, more deterministic.  
- High temperature (>1) → flatter, more chaotic.  

---

## 🧪 What about Ablations?
In interpretability research, people do **ablations**: zeroing out an attention head, a neuron, or a slice of embeddings to see how outputs change.  
It’s like pulling out one guitar string mid-song — the melody shifts, and you learn what that string was doing.

For example, you might find one head in layer 3 that consistently looks up “X is the capital of Y” relations.

Normal inference doesn’t ablate anything; this is just a research tool to peek inside.

---

## 🔑 Takeaway
- Giant parameter counts = giant matrices full of patterns.  
- Knowledge is encoded as *probabilities*, not sentences.  
- The model outputs a probability distribution for every next token.  
- Sampling introduces randomness; temperature controls how “creative” it feels.  
- Ablations help us understand what each piece is contributing.  

So yes — **it’s all about probabilities in AI models.**  
And once you see it this way, the mystery turns into math: billions of little numbers, shaping the likelihood of the next word you read.

---
