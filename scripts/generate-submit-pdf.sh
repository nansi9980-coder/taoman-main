#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TEMPLATE="$ROOT/public/documents/soumission-projet-tgi.template.html"
OUTPUT="$ROOT/public/documents/soumission-projet-tgi.pdf"

CHROME=""
for candidate in google-chrome google-chrome-stable chromium chromium-browser; do
  if command -v "$candidate" >/dev/null 2>&1; then
    CHROME="$candidate"
    break
  fi
done

if [[ -z "$CHROME" ]]; then
  echo "Erreur : Chrome/Chromium introuvable pour générer le PDF." >&2
  exit 1
fi

if [[ ! -f "$TEMPLATE" ]]; then
  echo "Erreur : modèle introuvable ($TEMPLATE)" >&2
  exit 1
fi

HTML_URL="file://$TEMPLATE"

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-sandbox \
  --run-all-compositor-stages-before-draw \
  --virtual-time-budget=10000 \
  --print-to-pdf="$OUTPUT" \
  --no-pdf-header-footer \
  "$HTML_URL"

echo "PDF généré : $OUTPUT"
