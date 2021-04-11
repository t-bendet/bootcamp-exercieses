// 1) What is the difference between import and require?
// import is supported under ES6, ES6 is not supported yet in Node.js so we use require
// 2) How can you enable using the import syntax using node js
// You need to either:
// Save the file with .mjs extension, or
// Add { "type": "module" } in the nearest package.json.
// 3)
import { test, test2, test3 } from "./util.js";
import fs from "fs";
test();
test2();
test3();
