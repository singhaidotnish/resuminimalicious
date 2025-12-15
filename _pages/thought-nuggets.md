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

{% assign my_posts = site.posts | where_exp:"item", "item.path contains '_posts/'" %}
{% for post in my_posts %}
  {% include archive-single.html %}
{% endfor %}

{% if my_posts.size == 0 %}
  <p>No thought nuggets found.</p>
{% endif %}

## 📥 Add a Nugget
This page is a living document. To suggest a topic or share your own nugget:
1. Fork the [site repository](https://github.com/your-username/your-repo)
2. Add your thought in the appropriate section
3. Submit a pull request

*Format: Use `- **Bold Title**: Description` for consistency.*