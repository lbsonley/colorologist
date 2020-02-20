const fs = require("fs");
const jsdoc2md = require("jsdoc-to-markdown");
const template = fs.readFileSync("scripts/docs-template.hbs", "utf-8");

jsdoc2md
  .render({
    files: "lib/index.js",
    template
  })
  .then(
    docs =>
      new Promise((resolve, reject) => {
        fs.writeFile("README.md", docs, e => {
          if (e) {
            reject(e);
          } else {
            resolve();
          }
        });
      })
  )
  .then(() => console.log("Successfully wrote docs"))
  .catch(e => console.log("Error writing docs", e));
