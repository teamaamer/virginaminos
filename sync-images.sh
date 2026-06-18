#!/usr/bin/env bash
# Sync uploaded product images (often dropped into capitalized/spaced folders)
# into the clean, lowercase, deploy-safe paths that the site references.
# Safe to re-run any time after you update images.
set -u
cd "$(dirname "$0")"
B="assets/img"

copy() { # copy SRC DEST  (only if SRC exists)
  if [ -f "$1" ]; then mkdir -p "$(dirname "$2")"; cp -f "$1" "$2"; echo "  ok  $2";
  else echo "  MISS $1"; fi
}

echo "Anti-Aging:"
copy "$B/Anti Aging/NAD+.png"               "$B/anti-aging/NAD.png"
copy "$B/Anti Aging/GHK-Cu.png"             "$B/anti-aging/GHK-Cu.png"
copy "$B/Anti Aging/Epitalon (Epithalon).png" "$B/anti-aging/Epitalon.png"
copy "$B/Anti Aging/SS-31.png"              "$B/anti-aging/SS-31.png"
copy "$B/Anti Aging/SNAP-8.png"             "$B/anti-aging/SNAP-8.png"

echo "Cognitive Enhancement:"
copy "$B/Cognitive Enchancement/Semax.png"        "$B/cognitive-enhancement/semax.png"
copy "$B/Cognitive Enchancement/Selank.png"       "$B/cognitive-enhancement/selank.png"
copy "$B/Cognitive Enchancement/Dihexa.png"       "$B/cognitive-enhancement/dihexa.png"
copy "$B/Cognitive Enchancement/DSIP.png"         "$B/cognitive-enhancement/dsip.png"
copy "$B/Cognitive Enchancement/Pinealon.png"     "$B/cognitive-enhancement/pinealon.png"
copy "$B/Cognitive Enchancement/ Semax-selank.png" "$B/cognitive-enhancement/selank-semax.png"

echo "Immunity:"
copy "$B/Immunity/Thymosin Alpha-1.png" "$B/immunity/thymosin-alpha-1.png"
copy "$B/Immunity/slu-pp-332.png"       "$B/immunity/slu-pp-332.png"

echo "GLP (Cagrilintide image lives in General Health folder):"
copy "$B/General Health/Wellness/Cagrilintide.png" "$B/glp-receptor-agonists/cagrilintide.png"

echo "Done."
