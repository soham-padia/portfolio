#!/usr/bin/env bash
set -e

PAGES_REPO="https://github.com/soham-padia/soham-padia.github.io.git"
PAGES_DIR="/tmp/soham-padia.github.io"
DIST_DIR="$(dirname "$0")/dist"

echo "→ Building..."
npm run build

echo "→ Cloning pages repo..."
rm -rf "$PAGES_DIR"
git clone "$PAGES_REPO" "$PAGES_DIR"

echo "→ Replacing files..."
cd "$PAGES_DIR"
git rm -rf . > /dev/null
cp -r "$DIST_DIR/." .

echo "→ Committing and pushing..."
git add -A
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M')"
git push origin main

echo "✓ Live at https://soham-padia.github.io"
