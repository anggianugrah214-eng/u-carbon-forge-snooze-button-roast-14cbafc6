// Snooze Button Roast — a single-line roast of a 6 AM Saturday alarm.
// Written fresh in this session: the alarm acts entitled, the snooze button
// acts like a pushy salesman, and the money joke lands in the final words.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Saturday, 6 AM: my alarm screams like it pays the rent here, and its snooze button, that smug nine-minute dealer, sells me dreams my awake self can't afford.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
