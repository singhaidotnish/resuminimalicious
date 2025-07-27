
# 🚀 Enhance Your Resuminimalicious Jekyll Site

---

## ✅ 1. Add SEO, Google Analytics, and Disqus

### 📈 In `_config.yml`, add:

```yaml
# SEO
seo:
  type: Person
  name: Nishith Singhai
  links:
    - https://github.com/zarir-engineer
    - https://linkedin.com/in/zarir-engineer

# Analytics
google_analytics: G-XXXXXXXXXX  # Replace with your tracking ID

# Disqus
disqus:
  shortname: your-disqus-shortname  # Get one at disqus.com
```

---

## 📝 2. Auto-create Blog Post Template

Create a starter post in `_posts/`:

```bash
mkdir -p _posts
```

**Example file**: `_posts/2025-07-27-welcome.md`

```markdown
---
title: "Welcome to Resuminimalicious!"
layout: single
author_profile: true
excerpt: "First post on my newly styled resume + blog site"
tags: [introduction, personal]
---

This is my first post! 🎉

Stay tuned as I share updates, tools, and thoughts on AI, VFX, trading, and creative tech.
```

💡 **Future posts**: just duplicate that file and update the date/title/tags.

---

## 📁 3. Verify `_data` folder structure

### ✅ Required files:

```
_data/
  experience.yml
  education.yml
  skills.yml
  navigation.yml     # optional, for menu
  authors.yml        # optional, for bio on posts
```

### 💡 Add `_data/navigation.yml` if you want top menu:

```yaml
main:
  - title: "Home"
    url: /
  - title: "Résumé"
    url: /resume/
  - title: "Blog"
    url: /blog/
```

---

## 🌐 4. Add a `CNAME` file (for custom domain)

If you're using a custom domain like `nishith.codes`, create a file called `CNAME` in the root:

```
CNAME
```

Inside it:

```
nishith.codes
```

Then configure the domain in your DNS panel to point to:

```
zarir-engineer.github.io
```

Make sure GitHub Pages (Settings → Pages) also shows `nishith.codes` under **Custom domain**, and check ✅ "Enforce HTTPS".

---

## ✅ Want it auto-prepared?

I can:
- Generate updated `_config.yml`
- Create a starter blog post
- Add `CNAME`
- ZIP and hand it to you

Just send:
- Google Analytics ID
- Disqus shortname
- Domain name (e.g., `nishith.codes`)

And I’ll prep it all! 🔧
