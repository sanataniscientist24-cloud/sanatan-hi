/**
 * Chroma-key pipeline for the Babaji 3D character:
 * 1. AI edit: character → flat pure-green background (720x1440)
 * 2. Deterministic green removal → transparent alpha cutout
 */
import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";

async function main() {
  const zai = await ZAI.create();
  const buf = fs.readFileSync("public/babaji/babaji-full.png");
  const dataUrl = `data:image/png;base64,${buf.toString("base64")}`;

  const prompt =
    "Keep this elderly Indian sadhu character (white beard, topknot hair, tilak, saffron kashaya robes, rudraksha mala, wooden staff) EXACTLY as he is — identical pose, identical face, identical robes, do not restyle or repaint him. " +
    "Replace the ENTIRE background with a perfectly flat, uniform, solid pure green chroma-key color (#00FF00): no scenery, no mountains, no shadows, no gradients, no vignetting — only one flat green color everywhere behind and around the character, from edge to edge.";

  const res = await zai.images.generations.edit({
    prompt,
    images: [{ url: dataUrl }],
    size: "720x1440",
  });

  const b64 = res.data[0].base64;
  fs.writeFileSync("/tmp/babaji-green.png", Buffer.from(b64, "base64"));
  console.log("saved /tmp/babaji-green.png", Buffer.from(b64, "base64").length, "bytes");
}

main().catch((e) => {
  console.error("FAILED:", e instanceof Error ? e.message : e);
  process.exit(1);
});
