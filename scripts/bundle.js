// @ts-check

const fs = require("fs");
const path = require("path");

const header = fs
  .readFileSync(path.resolve(__dirname, "Header.md"), "utf-8")
  .split(/\n/)
  .map((line) => ` * ${line}`)
  .join("\n");

const files = Array.from(findFiles(path.resolve(__dirname, "..", "src")));
const sources = files
  .filter((file) => !file.endsWith(".test.ts"))
  .map(loadFile);
const tests = files.filter((file) => file.endsWith(".test.ts")).map(loadFile);

const outputs = [
  `/**\n${header}\n */\n`,
  ...tests,
  `
  /**
   * ========================================================================================
   * 
   * 
   *                        END OF EXAMPLES, START OF IMPLEMENTATION
   * 
   * 
   * ========================================================================================
   */
  `
    .split(/\n/)
    .map((line) => line.trim())
    .join("\n"),
  ...sources,
];

console.log(outputs.join("\n\n"));

/**
 * @param {string} dir The path to search in.
 */
function* findFiles(dir) {
  for (const name of fs.readdirSync(dir)) {
    const filename = path.join(dir, name);
    if (name.endsWith(".ts")) {
      yield filename;
    } else if (fs.statSync(filename).isDirectory()) {
      yield* findFiles(filename);
    }
  }
}

/**
 * @param {string} filename
 */
function loadFile(filename) {
  const raw = fs.readFileSync(filename, "utf-8");
  const content = raw
    .replace(/export\s+type/g, "type")
    .replace(/export\s+\*\s+from\s+"(.*)";?/g, "")
    .replace(/import\s+\{([\s\S]*)\}\s+from\s+"(.*)";?/g, "")
    .trim();
  return content;
}
