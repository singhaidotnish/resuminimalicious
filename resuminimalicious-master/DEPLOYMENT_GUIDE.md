# 3D Carousel Deployment Guide

## 🔧 Files You Need

I've created 2 files for you:

1. **projects-carousel-3d-include.html** - The carousel component (goes in `_includes/`)
2. **projects.html** - The page file (goes in `_pages/`)

## 📁 Step-by-Step Installation

### Step 1: Place the Include File
```bash
# Copy the carousel include file to your _includes directory
cp projects-carousel-3d-include.html _includes/
```

### Step 2: Handle the Existing Projects Page

You have two options:

**Option A: Replace the existing projects.md**
```bash
# Backup the old file first
mv _pages/projects.md _pages/projects.md.backup

# Copy the new projects.html file
cp projects.html _pages/
```

**Option B: Keep both (rename the new one)**
```bash
# If you want to test first without removing the old page
cp projects.html _pages/projects-3d.html
# Then change the permalink in projects-3d.html to /projects-3d/
```

### Step 3: Remove the Root projects.html

The `projects.html` file in your root directory is being ignored because Jekyll looks in `_pages/` first.

```bash
# Remove the root projects.html to avoid confusion
rm projects.html
```

### Step 4: Test Locally (Optional)

```bash
# Start Jekyll server
bundle exec jekyll serve

# Open your browser to:
# http://localhost:4000/projects/
```

### Step 5: Deploy

```bash
# Add the changes
git add _includes/projects-carousel-3d-include.html
git add _pages/projects.html
git rm projects.html  # Remove root file

# Commit
git commit -m "Add 3D carousel to projects page"

# Push to deploy
git push origin main
```

## ⚠️ Common Issues & Solutions

### Issue 1: Page Not Showing Up
**Problem**: The carousel doesn't appear after deployment

**Solution**: 
- Ensure the file is in `_pages/` not root
- Check that the include filename matches exactly: `projects-carousel-3d-include.html`
- Wait 2-3 minutes for GitHub Pages to rebuild

### Issue 2: Images Not Loading
**Problem**: Some project images show placeholder

**Solution**: Add missing images to `/assets/projects/`:
- aipyqtfylicious.png
- hyperfotopixelicious.png
- tubesidecarificity.png

### Issue 3: Styles Conflicting with Theme
**Problem**: The carousel looks broken or has weird styling

**Solution**: The carousel uses its own scoped styles. If there are conflicts, you can:
1. Add `!important` to critical carousel styles
2. Wrap carousel in a container with higher specificity

### Issue 4: Old Projects Page Still Showing
**Problem**: Still seeing the old projects page

**Solution**:
```bash
# Clear Jekyll cache and rebuild
rm -rf _site .jekyll-cache
bundle exec jekyll serve
```

## 🎨 Customization Tips

### Change Colors
Edit the gradient background in the include file:
```css
.carousel-wrapper {
    background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 50%, #YOUR_COLOR3 100%);
}
```

### Adjust Carousel Speed
Change the auto-rotate interval (in milliseconds):
```javascript
autoRotateInterval = setInterval(handleNext, 4000); // Change 4000 to your preferred value
```

### Modify Card Size
Adjust these values in the CSS:
```css
.card-wrapper {
    width: 380px;    /* Card width */
    height: 480px;   /* Card height */
}
```

### Change Number of Visible Cards
Modify the radius to show more/fewer cards:
```javascript
const radius = 450; // Increase to spread cards more, decrease to pack them tighter
```

## 📝 File Structure After Installation

```
your-repo/
├── _includes/
│   └── projects-carousel-3d-include.html  ← New file
├── _pages/
│   ├── projects.html                       ← New/Updated file
│   └── projects.md.backup                  ← Your old file (if backed up)
├── assets/
│   └── projects/
│       ├── neo-titanium-mp.png
│       ├── varsity-audio-monorepo.png
│       ├── newtabfirefoxylicious.jpg
│       ├── solar-system.jpg
│       └── minimalgotronifylicious.png
└── ... (other files)
```

## 🚀 Quick Command Summary

```bash
# Complete installation in one go:
cp projects-carousel-3d-include.html _includes/
mv _pages/projects.md _pages/projects.md.backup
cp projects.html _pages/
rm projects.html  # Remove root file
git add _includes/projects-carousel-3d-include.html _pages/projects.html
git commit -m "Add 3D carousel to projects page"
git push origin main
```

## ✅ Verification Checklist

After deployment, verify:
- [ ] Page loads at https://nishith.is-a.dev/projects/
- [ ] All 8 projects are visible in the carousel
- [ ] Navigation buttons (left/right) work
- [ ] Dot navigation works
- [ ] Auto-rotate starts automatically
- [ ] Hover pauses auto-rotate
- [ ] External links work for projects that have them
- [ ] Responsive design works on mobile
- [ ] Keyboard navigation (arrow keys) works

## 🆘 Need Help?

If something's not working:
1. Check browser console for JavaScript errors (F12)
2. Verify file paths match exactly
3. Clear browser cache and hard reload (Ctrl+Shift+R)
4. Check that GitHub Pages finished building (Settings > Pages)

## 📊 Performance Notes

- The carousel is lightweight (no external dependencies)
- Uses CSS transforms for smooth 60fps animations
- Images load lazily with fallbacks
- Mobile-optimized with responsive breakpoints
