// This entry writes the answer for Two Lines to Your Past Self to the output directory,
// emitting the two-line reply as entry.txt so the harness can collect it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "Do not rewrite the same function for the fourth time at midnight.\nThat fourth rewrite became the bug you spent the next two days explaining to everyone.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
