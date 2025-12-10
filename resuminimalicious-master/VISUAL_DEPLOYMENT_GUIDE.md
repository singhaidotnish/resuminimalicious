# 📋 Visual Deployment Guide
## Copy-Paste Commands for resuminimalicious

---

## 🎯 Mission

Replace `projects.html` with modern `_pages/projects.md` + data file

---

## 📍 Before You Start

Open terminal and navigate to your repo:
```bash
cd ~/path/to/resuminimalicious
```

---

## 📥 Step 1: Copy Files

### Create projects data file
```bash
# Copy projects data
cp /path/to/downloads/_data_projects.yml _data/projects.yml
```

✅ **Verify:**
```bash
ls -la _data/projects.yml
# Should show: _data/projects.yml exists
```

### Create new projects page
```bash
# Copy projects page
cp /path/to/downloads/_pages_projects.md _pages/projects.md
```

✅ **Verify:**
```bash
ls -la _pages/projects.md
# Should show: _pages/projects.md exists
```

---

## 🔧 Step 2: Update Navigation

```bash
# Edit navigation file
nano _data/navigation.yml
# or
vim _data/navigation.yml
# or
code _data/navigation.yml
```

**Find this section:**
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

**Save and exit**

✅ **Verify:**
```bash
grep "/projects/" _data/navigation.yml
# Should show: url: /projects/
```

---

## 💾 Step 3: Backup Old File

```bash
# Backup the old projects page
mv projects.html projects.html.backup
```

✅ **Verify:**
```bash
ls -la projects.html.backup
# Should show: projects.html.backup exists
```

---

## 🧪 Step 4: Test Locally (Optional)

```bash
# Clean Jekyll cache
bundle exec jekyll clean

# Start local server
bundle exec jekyll serve
```

**Open browser:** http://localhost:4000/projects/

**Check:**
- [ ] Page loads
- [ ] Cards display
- [ ] Images show
- [ ] Hover works
- [ ] Links clickable

**Stop server:** Ctrl+C

---

## 🚀 Step 5: Deploy

### Stage all changes
```bash
git add _data/projects.yml
git add _pages/projects.md
git add _data/navigation.yml
git rm projects.html
git add projects.html.backup
```

✅ **Verify what will be committed:**
```bash
git status
```

Should show:
```
Changes to be committed:
  new file:   _data/projects.yml
  new file:   _pages/projects.md
  modified:   _data/navigation.yml
  deleted:    projects.html
  new file:   projects.html.backup
```

### Commit changes
```bash
git commit -m "Upgraded projects page to modern card design

- Migrated from projects.html to _pages/projects.md
- Added data-driven approach with _data/projects.yml
- Added status badges (Active/Completed/In Progress)
- Added technology tags for each project
- Enhanced project descriptions
- Added smooth hover animations
- Made fully responsive for mobile
- Backed up old projects.html

All 8 projects configured with:
- Correct GitHub URLs
- Existing images from assets/projects/
- Demo links where available
- Technology stack tags"
```

### Push to GitHub
```bash
git push origin master
```

✅ **Verify push succeeded:**
```bash
# Should show: Branch 'master' set up to track...
```

---

## ⏰ Step 6: Wait for Build

GitHub Pages needs to rebuild your site.

**Time:** 1-2 minutes

**Check build status:**
1. Go to: https://github.com/singhaidotnish/resuminimalicious/actions
2. Look for latest workflow run
3. Wait for green checkmark ✅

---

## 🌐 Step 7: Verify Live Site

**Visit:** https://nishith.is-a.dev/projects/

### Check These:
- [ ] Page loads without 404
- [ ] Gradient header shows
- [ ] All 8 projects display
- [ ] Cards in grid layout
- [ ] Status badges visible (Active/Completed/WIP)
- [ ] Technology tags show
- [ ] Hover effects work
- [ ] Images load (or emoji fallbacks)
- [ ] "View Code" buttons work
- [ ] Demo links work (where present)
- [ ] Page looks good on mobile

### Test Mobile:
1. Open on phone or use Chrome DevTools (F12)
2. Click device toolbar icon
3. Test iPhone, Android, tablet views

---

## 🎉 Success!

If all checks passed, you're done! 🚀

### Share Your Work:
```bash
# Take a screenshot for social media
# Share on Twitter:
```
> Just upgraded my projects page with a modern card design! 
> Check it out: https://nishith.is-a.dev/projects/
> #webdev #portfolio #buildinpublic

---

## 🔄 Rollback (If Needed)

If something went wrong:

```bash
# Restore old file
cp projects.html.backup projects.html

# Remove new files
rm _data/projects.yml
rm _pages/projects.md

# Restore navigation
git checkout _data/navigation.yml

# Commit rollback
git add projects.html
git rm projects.html.backup
git rm _data/projects.yml
git rm _pages/projects.md
git commit -m "Rollback to old projects page"
git push origin master
```

Then check documentation and try again!

---

## 📊 Command Summary

**Quick copy-paste version:**

```bash
# Navigate to repo
cd ~/path/to/resuminimalicious

# Copy files
cp /downloads/_data_projects.yml _data/projects.yml
cp /downloads/_pages_projects.md _pages/projects.md

# Edit navigation (manually)
nano _data/navigation.yml
# Change: url: /projects.html → url: /projects/

# Backup old file
mv projects.html projects.html.backup

# Stage changes
git add _data/projects.yml _pages/projects.md _data/navigation.yml projects.html.backup
git rm projects.html

# Commit
git commit -m "Upgraded projects page to modern design"

# Push
git push origin master

# Wait 1-2 minutes, then visit:
# https://nishith.is-a.dev/projects/
```

---

## 🆘 Troubleshooting

### "File not found" error
```bash
# Make sure you're in the right directory
pwd
# Should show: /path/to/resuminimalicious

# List files to confirm structure
ls -la _data/
ls -la _pages/
```

### "Permission denied" error
```bash
# Make files writable
chmod +w _data/ _pages/
```

### Git push rejected
```bash
# Pull latest changes first
git pull origin master

# Then try push again
git push origin master
```

### Jekyll build fails
```bash
# Check for errors
bundle exec jekyll doctor

# Update dependencies
bundle update

# Clear cache and rebuild
bundle exec jekyll clean
bundle exec jekyll serve
```

### Page shows 404
```bash
# Wait 2-3 minutes for GitHub Pages
# Then hard refresh: Ctrl+F5 or Cmd+Shift+R

# Check GitHub Actions for build errors:
# https://github.com/singhaidotnish/resuminimalicious/actions
```

---

## ✅ Final Verification

Run these checks:

```bash
# Files exist
ls -la _data/projects.yml
ls -la _pages/projects.md
ls -la projects.html.backup

# Changes committed
git log --oneline -1
# Should show: "Upgraded projects page..."

# Pushed to GitHub
git status
# Should show: "Your branch is up to date"

# Build succeeded
# Visit: https://github.com/singhaidotnish/resuminimalicious/actions
# Look for: ✅ Green checkmark

# Live site works
# Visit: https://nishith.is-a.dev/projects/
# Should show: Modern card design
```

---

## 🎯 Next Steps

After successful deployment:

### Today
- [ ] Test on multiple devices
- [ ] Share on social media
- [ ] Get feedback from 3-5 people
- [ ] Update resume/CV with portfolio link

### This Week
- [ ] Add missing project details
- [ ] Optimize images (< 500KB each)
- [ ] Write better descriptions
- [ ] Add demo videos (optional)

### This Month
- [ ] Update project statuses
- [ ] Add new completed projects
- [ ] Write blog posts about projects
- [ ] Monitor analytics

---

## 📚 Reference

**Documentation files:**
- START_HERE.md - Entry point
- QUICK_REFERENCE.md - Quick commands
- IMPLEMENTATION_GUIDE_CUSTOM.md - Detailed guide
- README_CUSTOM.md - Complete overview

**Validation tools:**
- YAML: http://www.yamllint.com/
- HTML: https://validator.w3.org/
- Images: https://tinypng.com/

**Your repo:**
- GitHub: https://github.com/singhaidotnish/resuminimalicious
- Live: https://nishith.is-a.dev/
- Projects: https://nishith.is-a.dev/projects/

---

**You've got this!** 🚀

Just follow the commands above and you'll have a professional projects page in minutes.

Need help? Check the documentation files or troubleshooting section above.

**Good luck!** ✨