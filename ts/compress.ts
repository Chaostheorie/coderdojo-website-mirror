/* eslint-disable max-len */
const glob = require('glob');
const fs = require('fs');
const minifyHtml = require('@minify-html/js');

const cfg = minifyHtml.createConfiguration({
    minifyJs: true,
    minifyCss: true,
});

glob('public/**/*.html', (err: Error, res: string[]) => {
    if (err) {
        console.log('Error', err);
    } else {
        for (let i = 0; i < res.length; i++) {
            fs.readFile(res[i], (err: Error, buf: Buffer) => {
                if (err) {
                    console.log('File Writing Error', err);
                } else {
                    const source = buf.toString();
                    const compressed = minifyHtml
                        .minify(source, cfg)
                        .toString();
                    const compression =
                        100 -
                        Math.round(compressed.length / (source.length / 100));
                    const minifiedName = res[i].substr(7);

                    if (compression === 0) {
                        console.log(
                            `${minifiedName} is already compressed. Skipping`,
                        );
                    } else {
                        fs.writeFile(
                            res[i],
                            compressed.toString(),
                            (err: Error) => {
                                if (err) {
                                    console.log(
                                        `Failed to write ${minifiedName} due to ${err}`,
                                    );
                                } else {
                                    console.log(
                                        `Compressed ${minifiedName} by ${compression}%`,
                                    );
                                }
                            },
                        );
                    }
                }
            });
        }
    }
});
