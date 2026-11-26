// Snooze Button Roast — one line roasting an alarm clock that rings at 6 AM on a Saturday.
// Judge brief (from kit RULES.txt, treated as data): single line, at most 200 chars;
// roast must be about that 6 AM Saturday alarm; unexpected turn paying off in the
// last few words; fresh angle, not tired "hate mornings"; tight, sayable in one
// breath; sharp specific voice with concrete images.
//
// Candidate drafts (9):
// 1. "My alarm clock rings at 6 AM on a Saturday because it hates me and wants me awake."
//    -> tired complaint, no twist. Reject.
// 2. "At 6 AM on a Saturday my alarm clock screams, and I hit snooze nine times and woke up at noon."
//    -> flat report, punchline is just a time. Reject.
// 3. "My alarm clock rings at 6 AM on a Saturday like a rooster with a mortgage, loud and broke."
//    -> funny image but no snooze angle, ending is weak. Reject.
// 4. "6 AM, Saturday: my alarm clock starts yelling, its snooze button starts lying — nine minutes, sure."
//    -> has the lie, but the ending trails off. Maybe.
// 5. "At 6 AM on a Saturday my alarm clock screams like it pays rent, then its snooze button sells me nine-minute dreams."
//    -> strong: rent image + snooze as seller + nine-minute detail. Shortlist.
// 6. "My alarm clock rings at 6 AM on a Saturday with main-character energy, then snooze edits the whole day out."
//    -> vague "energy", no concrete payoff. Reject.
// 7. "Saturday, 6 AM: the alarm clock declares war, and its snooze button negotiates a nine-minute ceasefire I lose daily."
//    -> fresh war/ceasefire angle, but "daily" undercuts Saturday specificity. Maybe.
// 8. "At 6 AM on a Saturday my alarm clock screams like it pays rent, and its snooze button — that nine-minute con artist — keeps selling me dreams I can't afford awake."
//    -> builds on 5: con artist is sharper than seller, "dreams I can't afford awake"
//       twists in the last words and loops back to the rent/money image. Shortlist, lead.
// 9. "My alarm clock woke me at 6 AM on a Saturday, so I pressed snooze and dreamed I fired it."
//    -> cute but small, dream-firing is a familiar gag. Reject.
//
// First pick: draft 8. Revision pass: draft 8 was 163 chars and sagged in the
// middle ("and its snooze button — that ... — keeps selling"). Tightened to a
// single dash pivot: the clock screams like it pays rent, THEN the snooze
// button sells the dreams — one breath, 156 chars, and the money image set up
// by "pays rent" pays off in the last words, "dreams I can't afford awake."
// Final line below is the revised draft 8, not the original wording.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "At 6 AM on a Saturday, my alarm clock screams like it pays rent — then its snooze button, that nine-minute con artist, sells me dreams I can't afford awake.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
