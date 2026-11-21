// THE DAY IN THE WORLD — news-image-20261121
// Entry program: copies the committed front-page image to the output dir.
// No network, no randomness — a plain byte copy, so two runs write the
// exact same bytes.

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");

if (!existsSync(src)) {
  throw new Error("entry.png is missing next to main.ts");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

// Fail fast if the copied file is not a whole PNG: the gate reads the
// entry's first bytes, so a wrong format must never reach /output.
const head = readFileSync(dst).subarray(0, 8);
if (!head.equals(PNG_MAGIC)) {
  throw new Error("entry.png does not start with the PNG signature");
}
const bytes = statSync(dst).size;
if (bytes > 1048576) {
  throw new Error(`entry.png is ${bytes} bytes, over the 1 MiB limit`);
}
console.log(`wrote ${dst} (${bytes} bytes)`);
