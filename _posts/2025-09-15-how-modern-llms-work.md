---
title: "How Modern LLMs Work: A Step-by-Step Guide"
excerpt: "From tokens and embeddings to attention heads, probabilities, sampling, and ablations — a practical walkthrough of how large language models process text and why small models wander."
date: 2025-09-11
layout: single
author_profile: true
read_time: true
comments: false
share: true
related: true
categories: [ai, llms, interpretability]
tags: [transformers, attention, sampling, ablation, distilgpt2, gpt, mechanistic-interpretability, probability]
toc: true
toc_label: "Jump to Section"
toc_sticky: true
visible: true
permalink: /how-modern-llms-work/
---

# Step-by-Step: How Modern LLMs Work (with Hands-On Labs)

---

## 0) Tokens → embeddings → residual stream
**Why:** everything starts as token IDs → vectors; those vectors are carried through layers via the residual stream.  
**Know:** tokenization (BPE), embedding matrices (`wte`), residual stream, layernorm.  
**Lab:** run **05_zero_a_slice_of_token_embeddings.py** and see how fluency degrades. Then try **07_add_small_gaussian_noise_to_residual_stream.py** to feel how sensitive the residual path is.

---

## 1) Attention core (Q, K, V) and heads
**Why:** attention decides what to copy/attend to; heads specialize in patterns.  
**Know:** Wq/Wk/Wv, attention scores, masking, multi-head attention.  
**Lab:** visualize the weight matrix (**01_visualize_a_weight_matrix.py**) to see Wq. Then **ablate a head** (**02_head_ablation.py**) to observe how a single head matters.

---

## 2) c_proj and mixing heads back
**Why:** after heads do their thing, `c_proj` recombines them — tiny tweaks change style/meaning.  
**Know:** output projection, head slices, per-head scaling.  
**Lab:** scale one head’s slice in `c_proj` (**03_scale_one_attention_head.py**) and compare outputs.

---

## 3) MLP blocks (non-linear “thinking” layer)
**Why:** MLPs transform features the attention pulled together.  
**Know:** feed-forward layer, activation, feature formation.  
**Lab:** nudge one MLP neuron (**04_nudge_one_mlp_neuron.py**) and see how completions shift.

---

## 4) Positional information (order matters)
**Why:** transformers need to know order; position encodings inject it.  
**Know:** learned vs sinusoidal encodings, what happens if boosted.  
**Lab:** temporarily **boost positional encodings** (**08_boost_positional_encodings.py**) and note changes in list prompts.

---

## 5) From logits → probabilities → choice
**Why:** the model outputs logits; **softmax** turns them into a distribution; decoding picks a token.  
**Know:** logits, softmax, entropy.  
**Lab:** peek with a **logit lens** (**11_logit_lens_peek.py**) to see what an early layer “thinks” the next tokens are.

---

## 6) Decoding strategies (determinism vs variety)
**Why:** generation depends heavily on decoding.  
**Know:** greedy (deterministic), temperature, top-k, top-p (nucleus), beam.  
**Lab:** compare temperature (**09_compare_temperature.py**) — try T=0.0 (greedy) vs T=1.2 (+ top-k). Feel why **small models + sampling wander**.

---

## 7) Biases & style nudges
**Why:** the final bias can tilt preferences (punctuation, style).  
**Know:** output bias, logit biasing.  
**Lab:** **style bias** (**12_style_bias.py**) — nudge comma bias and watch prose change.

---

## 8) Mechanistic interpretability moves
**Why:** establish cause-and-effect inside the net instead of guessing.  
**Know:** ablation, activation patching, causal tracing.  
**Lab:** **activation patching** (**06_activation_patching.py**) — copy a “clean” activation into a “corrupt” run and watch it fix the output.

---

## 9) Reproducibility knobs
**Why:** to know what makes runs repeatable.  
**Know:** seeds, `do_sample`, temperature/top-k/top-p, max tokens.  
**Lab:** check your helper (**quick_setup_run_once.py**) — flip `do_sample=False` to feel determinism.

---

## 10) Glue to run experiments
**Why:** consistent harness = easy iteration.  
**Know:** config, CLI, printing **BASE vs TWEAK** for comparisons.  
**Lab:** use **config.yaml** to set temperature/tokens; run via **cli.py** and print **BASE** then **TWEAK**.

---

# 🚀 Next Layers Once Comfortable
- **Training basics:** cross-entropy loss, backprop, teacher forcing.  
- **Scaling laws:** why more params = sharper distributions.  
- **Adaptation:** full fine-tune vs PEFT/LoRA vs prompting.  
- **Compression:** quantization, distillation.  
- **Long context:** positional strategies, KV cache.  
- **Retrieval Augmentation (RAG):** embeddings + vector DB.  
- **Evaluation:** perplexity, task metrics.  
- **Safety:** refusals, calibration, jailbreak resistance.

---

## ✅ Quick Start Checklist
1. Run: embeddings slice zeroing → attention head ablation → temperature comparison.  
2. For each, note **one-line takeaway**.  
3. Append takeaways under “⚡ Examples from Experiments” in your blog.

---
