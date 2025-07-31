---
title: "Résumé"
layout: single
toc: true
toc_sticky: true
permalink: /resume/
author_profile: true
---


<p align="center">
📍 Mumbai, India &nbsp;|&nbsp;
✉️ <a href="mailto:nishith@example.com">nishith@example.com</a>
</p>

**VFX Pipeline TD** crafting **scalable**, **AI-augmented** tools that streamline pipelines and free artists to focus on creativity.

---

## 🧠 Skills

{% for category in site.data.skills %}
### {{ category.name }}
{% for skill in category.skills %}
- **{{ skill.name }}**: {{ skill.level }}
{% endfor %}
{% endfor %}

---

## 🎓 Education

{% for edu in site.data.education %}
- **{{ edu.degree }}**, _{{ edu.school }}_
{{ edu.year }} | {{ edu.location }}
{% endfor %}

---

## 💼 Experience

{% for job in site.data.experience %}
### **{{ job.company }}**
<span style="font-style: italic;">{{ job.duration }}</span>

  {% for b in job.bullets %}
- {{ b }}
{% endfor %}
{% endfor %}

