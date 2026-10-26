#!/usr/bin/env python3
"""Chroma-key the AI green-screen edit into a transparent Babaji cutout.

greenness → alpha (soft threshold), green-spill unmixing on the fringe,
tight crop around the character with a small padding, saved as webp + png.
"""
import numpy as np
from PIL import Image

img = Image.open("/tmp/babaji-green.png").convert("RGB")
a = np.asarray(img).astype(np.float32)  # H x W x 3
H, W, _ = a.shape

r, g, b = a[..., 0], a[..., 1], a[..., 2]

# greenness score: how much G dominates R and B
greenness = np.minimum(g - r, g - b)

# soft alpha ramp: fully transparent at greenness>=60, opaque at <=18
alpha = np.clip((60.0 - greenness) / (60.0 - 18.0), 0.0, 1.0)

# hard rule too: strong green with decent brightness is definitely key
hard = (greenness > 55) & (g > 80)
alpha[hard] = 0.0

# green-spill unmixing on kept pixels: clamp G toward max(R,B)
spill = np.clip(greenness, 0, None)
spill = np.where(alpha > 0, np.minimum(spill, 25.0), 0)
g_clean = np.clip(g - spill * 0.9, 0, 255)
# also pull bright pure-green fringes toward their neighbours' warmth
out = np.stack([r, g_clean, b], axis=-1)

rgba = np.dstack([out, alpha * 255.0]).astype(np.uint8)

# tight crop to content (alpha > 10) with 6px padding
ys, xs = np.where(alpha > 0.04)
if len(ys):
    y0, y1 = max(ys.min() - 6, 0), min(ys.max() + 6, H - 1)
    x0, x1 = max(xs.min() - 6, 0), min(xs.max() + 6, W - 1)
    rgba = rgba[y0 : y1 + 1, x0 : x1 + 1]

cut = Image.fromarray(rgba, "RGBA")

# trim stray floating specks: keep the largest connected opaque component
arr = np.asarray(cut)
alpha_ch = arr[..., 3]
mask = alpha_ch > 25
from scipy import ndimage  # noqa
lbl, n = ndimage.label(mask)
if n > 1:
    sizes = ndimage.sum(mask, lbl, range(1, n + 1))
    keep = 1 + int(np.argmax(sizes))
    drop = (lbl != keep) & (lbl != 0)
    # only drop small isolated blobs (noise), keep anything >= 400px attached elsewhere
    removed = 0
    for i in range(1, n + 1):
        if i == keep:
            continue
        comp = lbl == i
        if comp.sum() >= 400:  # sizeable blob — part of the character (beard tuft etc.)
            continue
        arr[..., 3][comp] = 0
        removed += 1
    cut = Image.fromarray(arr, "RGBA")
    print("removed", removed, "specks")

cut.save("/home/z/my-project/public/babaji/babaji-hero.webp", "WEBP", quality=90, method=6)
cut.save("/home/z/my-project/public/babaji/babaji-hero.png")
print("size:", cut.size)
op = float((np.asarray(cut)[..., 3] > 200).mean())
print(f"opaque coverage: {op:.2%}")
