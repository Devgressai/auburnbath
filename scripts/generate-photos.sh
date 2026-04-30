#!/usr/bin/env bash
# Generate every photo declared in scripts/photos.json into public/images/<slug>.webp
# Uses the nano-banana skill (Gemini Imagen) under the hood.
#
# Usage:
#   bash scripts/generate-photos.sh           # generate any missing photos
#   bash scripts/generate-photos.sh --force   # regenerate all photos
#   bash scripts/generate-photos.sh --only home-hero,bath-hero
#
# Requires: GEMINI_API_KEY in scripts/.env (copy from scripts/.env.example).

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SCRIPT_DIR="$ROOT/scripts"
MANIFEST="$SCRIPT_DIR/photos.json"
OUTDIR="$ROOT/public/images"
ENV_FILE="$SCRIPT_DIR/.env"
NANO_BANANA="$HOME/.claude/skills/nano-banana/scripts/image.py"

FORCE=""
ONLY=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --force) FORCE="--force"; shift ;;
    --only) ONLY="$2"; shift 2 ;;
    *) echo "unknown flag: $1" >&2; exit 2 ;;
  esac
done

if [[ ! -f "$ENV_FILE" ]]; then
  echo "scripts/.env not found." >&2
  echo "Copy scripts/.env.example to scripts/.env and paste your" >&2
  echo "Google AI Studio key (https://aistudio.google.com/apikey)." >&2
  exit 1
fi

# shellcheck disable=SC1090
set -a; source "$ENV_FILE"; set +a

if [[ -z "${GEMINI_API_KEY:-}" ]]; then
  echo "GEMINI_API_KEY is empty. Edit scripts/.env and try again." >&2
  exit 1
fi

if [[ ! -f "$NANO_BANANA" ]]; then
  echo "Cannot find nano-banana script at $NANO_BANANA" >&2
  echo "Make sure the skill is installed at ~/.claude/skills/nano-banana/" >&2
  exit 1
fi

mkdir -p "$OUTDIR"

MODEL="$(/usr/bin/python3 -c "import json,sys;print(json.load(open('$MANIFEST')).get('model','flash'))")"
STYLE_SUFFIX="$(/usr/bin/python3 -c "import json,sys;print(json.load(open('$MANIFEST')).get('style_suffix',''))")"
SLUGS_AND_PROMPTS="$(/usr/bin/python3 <<PY
import json
m = json.load(open("$MANIFEST"))
for img in m["images"]:
    print("\t".join([img["slug"], img.get("aspect","landscape"), img["prompt"]]))
PY
)"

ONLY_SET=""
if [[ -n "$ONLY" ]]; then
  ONLY_SET="$(echo "$ONLY" | tr ',' '\n' | sed '/^$/d')"
fi

count=0
generated=0
skipped=0

while IFS=$'\t' read -r SLUG ASPECT PROMPT; do
  count=$((count+1))
  OUT="$OUTDIR/$SLUG.webp"

  if [[ -n "$ONLY_SET" ]] && ! echo "$ONLY_SET" | grep -qx "$SLUG"; then
    continue
  fi

  if [[ -z "$FORCE" && -f "$OUT" ]]; then
    echo "  [skip] $SLUG ($OUT exists)"
    skipped=$((skipped+1))
    continue
  fi

  FULL_PROMPT="$PROMPT $STYLE_SUFFIX"
  echo "  [gen]  $SLUG ($ASPECT) → $OUT"
  uv run "$NANO_BANANA" \
    --prompt "$FULL_PROMPT" \
    --output "$OUT" \
    --aspect "$ASPECT" \
    --model "$MODEL" \
    $FORCE
  generated=$((generated+1))
done <<< "$SLUGS_AND_PROMPTS"

echo
echo "Done. Total: $count  Generated: $generated  Skipped: $skipped"
echo "Photos live at $OUTDIR — Next.js will pick them up automatically on next build."
