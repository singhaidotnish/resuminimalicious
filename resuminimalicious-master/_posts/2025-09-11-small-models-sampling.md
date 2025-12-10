---
title: "Why Small Models Wander: Sampling, Probability, and Ablations"
excerpt: "A deep dive into why smaller models like DistilGPT2 produce less stable outputs, how probability distributions guide token choices, and how interpretability tools like ablations reveal model internals."
date: 2025-09-11
layout: single
author_profile: true
read_time: true
comments: false
share: true
related: true
categories: [ai, inside working]
tags: [probability, attention, sampling, gpt, distilgpt2]
toc: true
toc_label: "Jump to Section"
toc_sticky: true
visible: true
permalink: /small-models-sampling/
---

## 📦 Model Size & Parameters
- **DistilGPT2**: ~82M parameters  
- **GPT-2 medium**: ~345M  
- **GPT-2 large**: ~762M  
- **GPT-2 XL**: ~1.5B  
- **GPT-3**: up to 175B  

Parameters are the weights that store learned patterns. More parameters = more capacity for robust knowledge.

---

## 🧠 What Does "Encoding Knowledge" Mean?
Models don’t store facts like `"Paris → France"` as text.  
Instead, training shapes weights so that given `"Paris is the capital of"`, the model pushes **“France”** to the top of the probability list.  
That mapping is **knowledge encoded in weights.**

---

## 🎲 Probability Distributions
At every step, the model produces logits → softmax → probabilities over all tokens:

- France: 0.40
- United States: 0.20
- Spain: 0.05


This distribution defines the likelihood of each token.

---

## 📉 Flatter vs. Sharper Distributions
- **Sharp distribution** → one token dominates (confident, deterministic).  
- **Flat distribution** → probabilities spread out (less certain).  

Smaller models often produce **flatter** distributions, hence more wandering.

---

## 🎲 Sampling & Randomness
- **Greedy decoding:** always pick the max → deterministic.  
- **Sampling:** draw from the distribution → variety each run.  

### Temperature
Controls sharpness of distribution:
- **Low T (0.2):** sharper, more deterministic.  
- **High T (1.2):** flatter, more exploratory.  

👉 *So yes: sampling = variety of outcomes.*

---

## 📏 Where Do Numbers Like 0.4 Come From?
Softmax of logits:
pi=ezi∑jezj

Training adjusts weights so correct continuations (“France”) earn higher logits.

---

## 🧾 Key Terms
- **Determinism:** same input → same output (if no randomness).  
- **Low entropy:** distribution concentrated on few tokens.  
- **Ablation:** turning off part of the network (e.g. attention head).  
- **c_proj:** projection layer that recombines head outputs.  
- **Attention head:** a channel in self-attention focusing on patterns.  
- **Sampling noise:** randomness when drawing from probabilities.  
- **Randomness in token choice:** the dice roll at each step.  

⚠️ **Ablation is not used in normal text generation.** It’s a research tool.

---

## ⚡ Examples from Experiments
- **Head ablation:** Zero out a head → output changes.  
- **Noise injection:** Add Gaussian noise → completions differ.  
- **Style bias:** Boost comma token → more comma-heavy text.  
- **Logit lens:** Peek at early layer predictions.  

These tweaks show *which parts of the model matter most*.

---

## 🗺️ Why Small Models Wander
- Fewer parameters → less robust encoding.  
- Flatter probability distributions → more uncertainty.  
- Sampling with temperature → amplifies variety.  

Put together, **small models + sampling = wandering outputs.**
