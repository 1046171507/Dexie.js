import { program } from "commander";
import { version } from "../package.json";

program.version(version);

console.log("Hello en5", version);