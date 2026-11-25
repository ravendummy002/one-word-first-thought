// One Word, First Thought — entry program.
// Writes the single first-thought word to /output/entry.txt.
// Node 22, stdlib only, no network, deterministic.
// "defenestration": the first word that barges into your head uninvited —
// vivid, funny-sounding, and impossible to forget once it lands.
// The act of throwing something (or someone) out of a window, said with
// total confidence by a brain that was asked for its very first thought.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "defenestration";

// Guard the gate before writing: exactly one word, 1–24 chars, no whitespace.
if (!/^\S{1,24}$/.test(WORD)) {
  throw new Error("entry word fails the gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8"); // no trailing newline
