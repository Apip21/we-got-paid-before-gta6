// Entry hand-off for the make.fun bounty "gta6-meme-x-01".
//
// The actual entry is a meme post on X. This small program exists only so
// the grader can collect the address of that post: it takes the POST.json
// file sitting in the bot directory and places an identical copy into the
// output directory, where the grading harness expects to find it.
//
// Environment overrides (used for local runs outside the grader):
//   MAKEFUN_BOT_DIR     where POST.json is read from   (default: /bot)
//   MAKEFUN_OUTPUT_DIR  where the copy is written to   (default: /output)
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The program is deterministic: given the same POST.json it always writes
// the same bytes, and it touches nothing outside the two directories above.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const sourceDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourceFile = join(sourceDir, "POST.json");
const targetFile = join(targetDir, "POST.json");

mkdirSync(targetDir, { recursive: true });

try {
  copyFileSync(sourceFile, targetFile);
} catch (failure) {
  const reason = failure instanceof Error ? failure.message : String(failure);
  console.error(`failed to deliver POST.json (${sourceFile} -> ${targetFile}): ${reason}`);
  process.exit(1);
}
