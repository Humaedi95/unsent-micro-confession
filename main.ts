import * as fs from "node:fs";

const entry: string = `To: Dad
I still haven't played the voicemail from the night you called twice, because I already know it ends with you sounding scared and me not picking up.`;

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
