#!/bin/bash

# 3D Carousel Deployment Troubleshooting Script
# Run this in your repository root directory

echo "================================"
echo "3D Carousel Deployment Checker"
echo "================================"
echo ""

# Check 1: Files in correct locations
echo "✓ Checking file locations..."
echo ""

if [ -f "_includes/projects-carousel-3d-include.html" ]; then
    echo "  ✅ Include file found: _includes/projects-carousel-3d-include.html"
else
    echo "  ❌ MISSING: _includes/projects-carousel-3d-include.html"
    echo "     → Copy projects-carousel-3d-include.html to _includes/"
fi

if [ -f "_pages/projects.html" ]; then
    echo "  ✅ Page file found: _pages/projects.html"
else
    echo "  ❌ MISSING: _pages/projects.html"
    echo "     → Copy projects.html to _pages/"
fi

if [ -f "_pages/projects.md" ]; then
    echo "  ⚠️  WARNING: Old file exists: _pages/projects.md"
    echo "     → This might be overriding your new projects.html"
    echo "     → Rename it: mv _pages/projects.md _pages/projects.md.backup"
fi

if [ -f "projects.html" ]; then
    echo "  ⚠️  WARNING: Root file exists: projects.html (should be in _pages/)"
    echo "     → Remove it: rm projects.html"
fi

echo ""
echo "---"
echo ""

# Check 2: Git status
echo "✓ Checking git status..."
echo ""

if git rev-parse --git-dir > /dev/null 2>&1; then
    UNSTAGED=$(git diff --name-only)
    STAGED=$(git diff --cached --name-only)
    UNTRACKED=$(git ls-files --others --exclude-standard)
    
    if [ -n "$UNSTAGED" ] || [ -n "$STAGED" ] || [ -n "$UNTRACKED" ]; then
        echo "  ⚠️  You have uncommitted changes:"
        echo ""
        [ -n "$STAGED" ] && echo "  Staged for commit:" && echo "$STAGED" | sed 's/^/    - /'
        [ -n "$UNSTAGED" ] && echo "  Modified but not staged:" && echo "$UNSTAGED" | sed 's/^/    - /'
        [ -n "$UNTRACKED" ] && echo "  Untracked files:" && echo "$UNTRACKED" | sed 's/^/    - /'
        echo ""
        echo "  → Run: git add _includes/projects-carousel-3d-include.html _pages/projects.html"
        echo "  → Then: git commit -m 'Add 3D carousel'"
        echo "  → Then: git push origin main"
    else
        echo "  ✅ No uncommitted changes"
        echo ""
        echo "  Last commit:"
        git log -1 --pretty=format:"    - %h: %s (%ar)" 
        echo ""
        echo ""
        echo "  → If this commit includes your carousel files, GitHub Pages should rebuild soon"
    fi
else
    echo "  ❌ Not a git repository"
fi

echo ""
echo "---"
echo ""

# Check 3: Include content verification
echo "✓ Checking include file content..."
echo ""

if [ -f "_includes/projects-carousel-3d-include.html" ]; then
    if grep -q "<!DOCTYPE" "_includes/projects-carousel-3d-include.html"; then
        echo "  ❌ ERROR: Include file has <!DOCTYPE> tag"
        echo "     → This will break Jekyll includes"
        echo "     → Use the corrected projects-carousel-3d-include.html file"
    else
        echo "  ✅ Include file format is correct"
    fi
    
    if grep -q "carousel-wrapper" "_includes/projects-carousel-3d-include.html"; then
        echo "  ✅ Include file has carousel code"
    else
        echo "  ❌ Include file doesn't contain carousel code"
    fi
fi

echo ""
echo "---"
echo ""

# Check 4: Page file verification
echo "✓ Checking page file content..."
echo ""

if [ -f "_pages/projects.html" ]; then
    if grep -q "projects-carousel-3d-include.html" "_pages/projects.html"; then
        echo "  ✅ Page file includes the carousel"
    else
        echo "  ❌ Page file doesn't include carousel"
        echo "     → Should contain: {% include projects-carousel-3d-include.html %}"
    fi
    
    if grep -q "permalink: /projects/" "_pages/projects.html"; then
        echo "  ✅ Permalink is correct: /projects/"
    else
        echo "  ❌ Permalink might be wrong"
    fi
fi

echo ""
echo "================================"
echo "SUMMARY & NEXT STEPS"
echo "================================"
echo ""
echo "If all checks passed:"
echo "  1. Wait 2-3 minutes for GitHub Pages to rebuild"
echo "  2. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)"
echo "  3. Check: https://nishith.is-a.dev/projects/"
echo ""
echo "If still showing old content:"
echo "  1. Check GitHub Actions: https://github.com/YOUR-USERNAME/YOUR-REPO/actions"
echo "  2. Look for build errors"
echo "  3. Try a hard refresh or incognito mode"
echo ""
echo "Need more help? Check the DEPLOYMENT_GUIDE.md file"
echo ""
