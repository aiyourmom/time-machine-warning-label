// Funniest Time Machine Warning Label — make.fun micro entry.
// Writes one warning label (<=120 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: Do not meet your past self. He is very disappointed in you.";

// Gate: the entry must be 1-120 characters (code points), not whitespace-only.
const len = [...LABEL].length;
if (len < 1 || len > 120 || LABEL.trim().length === 0) {
  throw new Error(`label length ${len} is outside the 1-120 character gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL + "\n", "utf8");
console.log(LABEL);
