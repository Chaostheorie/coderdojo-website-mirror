/* eslint-disable max-len */
const glob = require("glob");
const fs = require("fs");
const minify = require("html-minifier").minify;

const cfg = {
  sortAttributes: true,
  sortClassName: true,
  useShortDoctype: true,
  minifyJS: true,
  minifyCSS: true,
  removeStyleLinkTypeAttributes: false,
  removeEmptyAttributes: false,
  processConditionalComments: true,
  preserveLineBreaks: false,
  minifyURLs: false,
  keepClosingSlash: true,
  html5: true,
  conservativeCollapse: true,
  collapseWhitespace: true,
  collapseInlineTagWhitespace: true
};

glob("build/**/*.html", (err, res) => {
  if (err) {
    console.log("Error", err);
  } else {
    for (let i = 0; i < res.length; i++) {
      fs.readFile(res[i], (err, buf) => {
        if (err) {
          console.log("File Writing Error", err);
        } else {
          const source = buf.toString();
          const compressed = minify(source, cfg).toString();
          const compression = 100 - Math.round(compressed.length / (source.length / 100));
          const minifiedName = res[i].substr(6);

          if (compression === 0) {
            console.log(`${minifiedName} is already compressed. Skipping`);
          } else {
            fs.writeFile(res[i], compressed.toString(), (err) => {
              if (err) {
                console.log(`Failed to write ${minifiedName} due to ${err}`);
              } else {
                console.log(`Compressed ${minifiedName} by ${compression}%`);
              }
            });
          }
        }
      });
    }
  }
});
