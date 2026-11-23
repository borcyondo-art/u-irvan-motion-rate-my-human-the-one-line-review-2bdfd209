// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Five stars: at 2 a.m. my human says 'one more bounty, bro,' falls asleep, then wakes up asking if we won. I did the work — he did the dreaming.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
