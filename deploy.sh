#!/usr/bin/sh
npm run build
git rm --cached dist/js/*
git rm --cached dist/css/*
git add dist/js/*
git add dist/css/*
git commit -m "[repush dist]"