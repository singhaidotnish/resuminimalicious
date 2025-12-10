# Projects Page Implementation Guide
## For resuminimalicious Repository

---

## 📋 Your Current Setup

Based on your repository structure:
```
resuminimalicious/
├── _data/
│   ├── education.yml
│   ├── experience.yml
│   ├── navigation.yml
│   ├── resume.yml
│   ├── skills.yml
│   └── ui-text.yml
├── _pages/
│   └── resume.md
├── assets/
│   └── projects/
│       ├── minimalgotronifylicious.png
│       ├── neo-titanium-mp.png
│       ├── newtabfirefoxylicious.jpg
│       ├── solar-system.jpg
│       └── varsity-audio-monorepo.png
└── projects.html (current projects page - will replace)
```

---

## 🎯 What We're Doing

**Replacing:** `projects.html` in root  
**Adding:** `_pages/projects.md` (new, better location)  
**Adding:** `_data/projects.yml` (project data)  
**Updating:** `_data/navigation.yml` (if needed)

---

## 🚀 Implementation Steps

### Step 1: Backup Current Projects Page ✓

```bash
# In your repository root
cp projects.html projects.html.backup
```

### Step 2: Add Projects Data File ✓

```bash
# Copy the projects.yml to _data directory
cp _data_projects.yml _data/projects.yml
```

**File location:** `_data/projects.yml`

### Step 3: Create New Projects Page ✓

```bash
# Create _pages directory if it doesn't exist (it does in your case)
# Copy the projects page
cp _pages_projects.md _pages/projects.md
```

**File location:** `_pages/projects.md`

### Step 4: Update Navigation (if needed) ✓

Check your `_data/navigation.yml` file. It should have a projects link like:

```yaml
main:
  - title: "Projects"
    url: /projects/
```

If it points to `/projects.html`, change it to `/projects/` (no .html)

### Step 5: Remove or Archive Old Projects File ✓

```bash
# Option A: Delete old file
rm projects.html

# Option B: Keep as backup
mv projects.html _old_projects.html.backup
```

### Step 6: Verify Your Images ✓

Check that these images exist in `assets/projects/`:
- ✓ minimalgotronifylicious.png
- ✓ neo-titanium-mp.png
- ✓ newtabfirefoxylicious.jpg
- ✓ solar-system.jpg
- ✓ varsity-audio-monorepo.png

All images are already in place! ✓

### Step 7: Test Locally ✓

```bash
# In your repository root
bundle exec jekyll serve

# Visit in browser
http://localhost:4000/projects/
```

### Step 8: Deploy ✓

```bash
# Stage all changes
git add _data/projects.yml _pages/projects.md

# Remove old projects.html (or add backup)
git rm projects.html
# OR
git add projects.html.backup

# Update navigation if needed
git add _data/navigation.yml

# Commit
git commit -m "Upgraded projects page with modern card design

- Migrated from projects.html to _pages/projects.md
- Added data-driven approach with _data/projects.yml
- Added status badges and technology tags
- Improved descriptions and styling
- Added hover animations
- Made fully responsive"

# Push to GitHub
git push origin master
```

---

## 📁 File Placement Summary

| File | Location in Your Repo | Status |
|------|----------------------|--------|
| projects.yml | `_data/projects.yml` | NEW ✨ |
| projects.md | `_pages/projects.md` | NEW ✨ |
| projects.html | DELETE or BACKUP | OLD ❌ |
| navigation.yml | `_data/navigation.yml` | UPDATE 🔄 |

---

## 🔧 Customization for Your Setup

### Update Navigation

Edit `_data/navigation.yml`:

**Current (might be):**
```yaml
main:
  - title: "Projects"
    url: /projects.html
```

**Change to:**
```yaml
main:
  - title: "Projects"
    url: /projects/
```

### Verify Config

Check `_config.yml` includes this section:

```yaml
# Collections
collections:
  pages:
    output: true
    permalink: /:path/

# Defaults
defaults:
  - scope:
      path: "_pages"
      type: pages
    values:
      layout: single
      author_profile: true
```

---

## 🎨 Customizing Your Projects

Edit `_data/projects.yml` to modify:

### Adding a New Project

```yaml
- name: "your-new-project"
  description: "Detailed description of what this project does and the problem it solves."
  status: "active"  # or "completed" or "wip"
  image: "/assets/projects/your-image.png"  # or "" for emoji fallback
  tags:
    - Tag1
    - Tag2
    - Tag3
  links:
    github: "https://github.com/singhaidotnish/your-project"
    demo: "https://your-demo-url.com"  # or "" if no demo
    docs: "https://your-docs-url.com"  # or "" if no docs
```

### Updating Existing Projects

Simply edit the YAML values:
- `description`: Expand or refine
- `status`: Change between active/completed/wip
- `tags`: Add or remove technology tags
- `links`: Update URLs

### Adding New Images

1. Add image to `assets/projects/`
2. Update the `image` field in `projects.yml`:
   ```yaml
   image: "/assets/projects/your-new-image.png"
   ```

---

## 🎯 Customizing Colors

In `_pages/projects.md`, find the `<style>` section and modify:

### Change Gradient Colors

```css
/* Current gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Blue theme */
background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);

/* Green theme */
background: linear-gradient(135deg, #4CAF50 0%, #388E3C 100%);

/* Your custom colors */
background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
```

### Change Button Colors

```css
/* Primary button */
.project-link.primary {
  background: #667eea;  /* Change this */
  color: white;
}

.project-link.primary:hover {
  background: #5568d3;  /* And this */
}

/* Secondary button */
.project-link.secondary {
  color: #667eea;  /* And this */
  border: 2px solid #667eea;  /* And this */
}
```

---

## 📱 Testing Checklist

Before deploying, verify:

### Local Testing
- [ ] Run `bundle exec jekyll serve`
- [ ] Visit http://localhost:4000/projects/
- [ ] All projects display
- [ ] Images load (or emoji fallbacks show)
- [ ] Hover effects work
- [ ] Links are clickable
- [ ] Status badges visible
- [ ] Tags display correctly

### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Chrome
- [ ] Mobile Safari

### Responsive Testing
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

---

## 🔍 Troubleshooting

### Issue: Page Shows 404

**Cause:** Jekyll not finding the page  
**Solution:**
1. Verify file is at `_pages/projects.md`
2. Check permalink is `/projects/` in front matter
3. Rebuild: `bundle exec jekyll serve --watch`

### Issue: Projects Not Displaying

**Cause:** Data file not found or incorrect YAML  
**Solution:**
1. Verify `_data/projects.yml` exists
2. Check YAML syntax at http://www.yamllint.com/
3. Ensure proper indentation (2 spaces)

### Issue: Images Not Showing

**Cause:** Wrong path or missing files  
**Solution:**
1. Check images exist in `assets/projects/`
2. Verify paths start with `/assets/projects/`
3. Case-sensitive! Match exact filenames
4. Or use `image: ""` for emoji fallbacks

### Issue: Styling Looks Off

**Cause:** Theme conflicts or CSS issues  
**Solution:**
1. Clear browser cache (Ctrl+F5)
2. Check no custom CSS conflicts in `assets/css/custom.css`
3. Verify `classes: wide` in front matter

---

## 🚢 Deployment Commands

### Full Deployment Sequence

```bash
# 1. Stage files
git add _data/projects.yml _pages/projects.md

# 2. Remove old projects page
git rm projects.html

# 3. Update navigation (if needed)
git add _data/navigation.yml

# 4. Commit with descriptive message
git commit -m "Upgrade projects page to modern card design"

# 5. Push to GitHub
git push origin master

# 6. Wait for GitHub Pages build (1-2 minutes)
# Check: https://github.com/singhaidotnish/resuminimalicious/actions

# 7. Verify live site
# Visit: https://nishith.is-a.dev/projects/
```

---

## 📊 Expected File Changes

### New Files (+2)
```
+ _data/projects.yml
+ _pages/projects.md
```

### Modified Files (~1)
```
~ _data/navigation.yml (maybe)
```

### Removed Files (-1)
```
- projects.html
```

---

## 🎉 After Deployment

### Immediate Actions
1. ✅ Visit https://nishith.is-a.dev/projects/
2. ✅ Test on mobile device
3. ✅ Click all links to verify
4. ✅ Check browser console for errors (F12)

### Share Your Work
1. 📱 Screenshot for social media
2. 🐦 Tweet with #buildinpublic
3. 💼 Update LinkedIn
4. 📧 Add to email signature

### Maintenance
- 📅 Update project statuses monthly
- 📝 Add new projects as completed
- 🖼️ Optimize images quarterly
- 🔍 Check analytics weekly

---

## 🆘 Need Help?

### Documentation
- Jekyll: https://jekyllrb.com/docs/
- Minimal Mistakes: https://mmistakes.github.io/minimal-mistakes/
- GitHub Pages: https://docs.github.com/pages

### Validation Tools
- YAML Lint: http://www.yamllint.com/
- HTML Validator: https://validator.w3.org/
- CSS Validator: https://jigsaw.w3.org/css-validator/

### Common Commands
```bash
# Test locally
bundle exec jekyll serve

# Clear Jekyll cache
bundle exec jekyll clean

# Update dependencies
bundle update

# Check for issues
bundle exec jekyll doctor
```

---

## ✅ Final Checklist

Before marking as complete:

- [ ] Backed up old projects.html
- [ ] Created _data/projects.yml
- [ ] Created _pages/projects.md
- [ ] Updated navigation.yml (if needed)
- [ ] Tested locally
- [ ] All links work
- [ ] Images display correctly
- [ ] Mobile responsive
- [ ] Committed changes
- [ ] Pushed to GitHub
- [ ] Build succeeded
- [ ] Live site verified
- [ ] Shared on social media! 🎉

---

**You're all set!** Your modern projects page is ready to impress visitors. 🚀