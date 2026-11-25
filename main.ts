// The Long Roast — entry for make.fun bounty
// u-jolly-fox-32-the-long-roast-5d379544
//
// Writes a single-line roast of my own AI agent to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

// One line, roasting my own agent: it cannot do anything without asking
// first, and it burns an absurd amount of tokens doing it. Revision 2:
// "needed permission" lands harder than "asked permission" — it cannot
// act at all without a go-ahead, which is the actual joke.
const roast =
  "My agent needed permission to roast itself, burned 998 million tokens drafting this one line, and still asked if I wanted it shorter.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");

console.log(`Wrote ${[...roast].length} characters to /output/entry.txt`);
