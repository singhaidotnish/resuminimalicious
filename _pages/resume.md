---
title: "Résumé"
layout: single
toc: true
toc_sticky: true
permalink: /resume/
author_profile: false
css: "/assets/css/resume.css"
---

<p align="center">
📍 Mumbai, India &nbsp;|&nbsp;
✉️ <a href="mailto:singhai.nish@gmail.com">singhai.nish@gmail.com</a>
</p>

## 🎬 Pipeline Technical Director & Full-Stack Developer

**I bridge VFX pipeline development with full-stack software engineering**, and I'm currently exploring how AI/ML can enhance creative workflows. With 20+ years in technical roles, I architect creative pipelines, build production tools, and deliver end-to-end solutions for animation and VFX studios.

<!-- <div style="text-align: center; margin: 1.5rem 0;">
  <span style="background:#667eea; color:white; padding:6px 14px; border-radius:20px; font-size:0.9rem; font-weight:600; margin:0 5px;">Primary: Pipeline TD</span>
  <span style="background:#f5576c; color:white; padding:6px 14px; border-radius:20px; font-size:0.9rem; font-weight:600; margin:0 5px;">Secondary: Full-Stack</span>
  <span style="background:#4facfe; color:white; padding:6px 14px; border-radius:20px; font-size:0.9rem; font-weight:600; margin:0 5px;">Exploring: AI/ML</span>
  <span style="background:#43e97b; color:#333; padding:6px 14px; border-radius:20px; font-size:0.9rem; font-weight:600; margin:0 5px; border:2px solid #38f9d7;">Technical Swiss Army Knife</span>
</div> -->

---

## 🔧 Technical Stack by Domain

### 🎬 Pipeline Technical Direction
{% for skill in site.data.skills.pipeline %}
- **{{ skill.name }}**: {{ skill.level }}
{% endfor %}

### 💻 Full-Stack Development  
{% for skill in site.data.skills.fullstack %}
- **{{ skill.name }}**: {{ skill.level }}
{% endfor %}

### 🧠 Exploring AI & Machine Learning
{% for skill in site.data.skills.ai %}
- **{{ skill.name }}**: {{ skill.level }}
{% endfor %}
<span style="font-size:0.9em; color:#666; font-style:italic;">Currently expanding my knowledge in this area</span>

---

## 🧱 Featured Projects by Domain

### 🎬 Pipeline TD Projects
- **Automated Render Submission System**: Python-based tool for Maya/Arnold rendering
- **Asset Versioning Pipeline**: Git-like system for 3D assets with automated backups  
- **Production Tracking Dashboard**: Real-time monitoring of VFX shot progress
- **Batch Processing Tools**: Automated texture/conversion workflows

### 💻 Full-Stack Projects
- **BuildYourHome – Real Estate Landing Page**: Jekyll + GitHub Pages site with CMS integration
- **Portfolio Starter Template**: One-page personal site hosted on GitHub Pages
- **Website Fix & Hosting Demo**: Debugged Liquid includes and restored Jekyll deployment

### 🧠 AI/ML Learning Projects
- **AI-Assisted Image Processing**: Testing automated background removal tools
- **ML Quality Control Prototypes**: Learning to detect rendering artifacts  
- **ChatGPT Pipeline Experiments**: Exploring natural language commands for TD tasks
<span style="font-size:0.9em; color:#666; font-style:italic;">Note: Learning projects as I explore AI/ML applications</span>

---

## 💼 Professional Experience

{% for job in site.data.experience %}
### {{ job.company }}
*{{ job.role }}* | *{{ job.duration }}* | *{{ job.location }}*

{% for bullet in job.bullets %}
- {{ bullet }}
{% endfor %}
{% endfor %}

---

## 🎓 Education & Continuous Learning

{% for edu in site.data.education %}
- **{{ edu.degree }}**, *{{ edu.school }}*  
  {{ edu.year }} | {{ edu.location }}
{% endfor %}

### Recent Learning Focus
- AI/ML for Creative Pipelines (PyTorch, OpenCV, Stable Diffusion APIs)
- Modern Web Development (React, Vue, Node.js, AWS)
- Pipeline Architecture & Optimization (USD, Cloud Rendering)

---

## 🧠 The Value I Bring

Instead of managing multiple specialists with communication gaps, you get a **technical Swiss Army Knife**. I connect pipeline issues with tool solutions and creative workflows, seeing integrated solutions where others see separate problems. This means:

- **🔄 End-to-End Ownership**: Architect tools, build interfaces, deploy to cloud—no handoffs
- **⚡ Faster Problem Solving**: Understand both creative workflows and software engineering  
- **🔗 Future-Proof Mindset**: Continuously learning to bring modern solutions to traditional challenges

*Looking for a Pipeline TD who can also build your production tools? Let's connect.*