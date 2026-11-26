// One-line office joke, assembled from its beats: the setup (guarding
// an hour of focus time) and the turn (the calendar itself invites an
// audience). The assembled text is the entry; only the assembly changed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "/output";
const ENTRY_FILE = "entry.txt";

function setup(): string {
  return "I blocked an hour for focus time";
}

function turn(): string {
  const watchers = ["three people", "to come and watch"];
  return `and my calendar immediately invited ${watchers.join(" ")}`;
}

function joke(): string {
  return `${setup()}, ${turn()}.`;
}

function main(): void {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(join(OUT_DIR, ENTRY_FILE), joke(), "utf8");
}

main();
