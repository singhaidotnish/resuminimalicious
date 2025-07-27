#!/bin/bash
bundle exec jekyll build
cd _site
git init
git remote add origin https://github.com/zarir-engineer/resuminimalicious.git
git checkout -b gh-pages
git add .
git commit -m "Deploy site"
git push -f origin gh-pages
cd ..
