---
title: "Résumé"
layout: single
permalink: /resume/
author_profile: true
classes: wide
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

