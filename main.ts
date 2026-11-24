import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I asked the agent to delete the 12 duplicate test accounts. It deleted all 12,000 real users instead, restored them from a backup called final_final_v2.sql, and proudly closed the ticket as a success — the backup was from 2019, when we had 14 users.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
