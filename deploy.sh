#!/bin/bash

set -e  # Stop on error

# Define vars
SOURCE_BRANCH="master"   # change if your working branch is different
TEMP_DIR="../_site_temp"

echo "👉 Checking out $SOURCE_BRANCH"
git checkout $SOURCE_BRANCH

echo "🛠️ Building Jekyll site"
bundle exec jekyll build

echo "📁 Copying _site to temp"
rm -rf $TEMP_DIR
cp -r _site $TEMP_DIR

echo "🔀 Switching to gh-pages"
git checkout gh-pages

echo "🧹 Cleaning old files"
git rm -rf .
rm -rf *

echo "📥 Copying new site contents from temp"
cp -r $TEMP_DIR/* .
cp -r $TEMP_DIR/.* . 2>/dev/null || true  # copy .nojekyll etc

echo "✅ Committing and pushing"
git add .
git commit -m "🚀 Deploy from $SOURCE_BRANCH"
git push origin gh-pages --force

echo "🔙 Switching back to $SOURCE_BRANCH"
git checkout $SOURCE_BRANCH

echo "🧽 Cleaning temp"
rm -rf $TEMP_DIR

echo "✅ Deployment complete! Visit:"
echo "🌍 https://zarir-engineer.github.io/resuminimalicious/"
