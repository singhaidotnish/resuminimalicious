---
title: "Thought Nuggets"
layout: archive
toc: true
toc_sticky: true
permalink: /thought-nuggets/
author_profile: true
---

## 🔍 About This Space
Quick thoughts, half-formed ideas, and interesting connections that don't warrant a full blog post. Updated whenever inspiration strikes.

*📌 Use the table of contents on the right to jump to any section.*

---

{% if site.tagsmap %}
  {% for collection in site.tagsmap %}
    <h2 id="{{ collection[0] | slugify }}" class="archive__subtitle">{{ collection[0] }}</h2>
    {% for post in collection[1] %}
      {% include archive-single.html %}
    {% endfor %}
  {% endfor %}
{% else %}
  {% for post in site.posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

## 📥 Add a Nugget
This page is a living document. To suggest a topic or share your own nugget:
1. Fork the [site repository](https://github.com/your-username/your-repo)
2. Add your thought in the appropriate section
3. Submit a pull request

*Format: Use `- **Bold Title**: Description` for consistency.*