---
title: "Résumé"
layout: single
permalink: /resume/
author_profile: true
classes: wide
---
<p align="center">
📍 Mumbai, India &nbsp;|&nbsp;
✉️ <a href="mailto:nishith@example.com">nishith@example.com</a>
</p>

<p align="center">
<strong>VFX Pipeline TD</strong> specializing in automation, real-time tooling, and AI-enhanced workflows.<br>
I design systems that simplify complex pipelines, empower artists, and scale with production demands.
</p>

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
### {{ job.position }}
**{{ job.company }}**  
<span style="font-style: italic;">{{ job.duration }}</span>

  {% for b in job.bullets %}
- {{ b }}
{% endfor %}
{% endfor %}

