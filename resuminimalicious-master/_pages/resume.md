---
title: "Résumé"
layout: single
toc: true
toc_sticky: true
permalink: /resume/
author_profile: false
---


<p align="center">
📍 Mumbai, India &nbsp;|&nbsp;
✉️ <a href="mailto:nishith@example.com">singhai.nish@gmail.com</a>
</p>

**VFX Pipeline TD** developing **scalable**, **AI-augmented** tools that are designed to streamline workflows and empower artists to focus on creativity.
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
<h3 id="{{ job.company | slugify }}">{{ job.company }}</h3>
*{{ job.duration }}*

{% for b in job.bullets %}
- {{ b }}
{% endfor %}

{% endfor %}
