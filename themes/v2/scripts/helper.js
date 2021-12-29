const fs = require('fs');
const url_for = hexo.extend.helper.get('url_for').bind(hexo);
const truncate = hexo.extend.helper.get('truncate').bind(hexo);
const strip = hexo.extend.helper.get('strip_html').bind(hexo);
const helper_cache = {};

// [path, alt, float = "null"]
hexo.extend.tag.register('figure', function (data) {
    return `
    <div class="${data.length >= 3 ? '' : 'tw-w-full tw-my-2'}">
        <figure class="${data.length >= 3 ? `tw-m-2 tw-float-${data[2]}` : 'tw-mx-auto tw-w-fit'}">
            <img src="${url_for(data[0])}" alt="${data[1]}">
            <figcaption>${data[1]}</figcaption>
        </figure>
    </div>`;
});

hexo.extend.tag.register('audio', function (src) {
    return `<div data-toggle="audio-player" data-src="${src[0]}" data-title="${src[1]}" data-artist="${src[2]}" data-cover="${src[3]}" class="tw-my-4"></div>`;
});

hexo.extend.tag.register('button', function (data) {
    let button = `
    <a class="btn btn-primary tw-mx-2" href="${url_for(data[1])}">
        <i class="bi bi-${data.length >= 4 ? data[3] || 'link-45deg' : 'link45-deg'} tw-mr-2"></i> ${data[0]}
    </a>`;

    if (data[2] === 'null') {
        return button;
    } else {
        return `
        <div class="tw-flex tw-w-full tw-my-1 tw-justify-${data[2] || 'center'}">
            ${button}
        </div>
        `;
    }
});

hexo.extend.tag.register('file', function (path) {
    return '';
});

hexo.extend.helper.register('title_case', function (str) {
    if (typeof str === 'string') {
        return str.replace(str[0], str[0].toUpperCase()).replace(str[1], str[1].toLowerCase());
    } else {
        console.warn(`title_case helper called on non-string item: ${str}`);
        return str;
    }
});

hexo.extend.tag.register('attributions', function () {
    let index = hexo.config.theme_config.license_index;

    if (helper_cache['attributions'] !== undefined) {
        return helper_cache['attributions'];
    } else if (fs.existsSync(index)) {
        helper_cache['attributions'] = (() => {
            let licenses = JSON.parse(fs.readFileSync(index));

            console.log('Cache Bust');
            return `
            <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-2 tw-mt-3">
                ${Object.keys(licenses)
                    .map((license) => {
                        let data = licenses[license];

                        return `
                        <div class="tw-flex tw-flex-col card">
                            <div class="card-title tw-font-bold tw-flex tw-justify-between">
                                ${strip(
                                    license
                                )} <span class="tw-border-solid tw-border-theme tw-border-1 tw-p-1">${strip(
                            data['licenses']
                        )}
                        </span>
                            </div>

                            <div class="tw-flex tw-flex-col tw-justify-between tw-flex-grow card-content">
                                <p class="tw-flex-grow">
                                    <details>
                                        <summary>${strip(
                                            truncate(
                                                data['copyright'] === '' || data['copyright'] === undefined
                                                    ? data['publisher'] === '' || data['publisher'] === undefined
                                                        ? 'License Text'
                                                        : data['publisher']
                                                    : data['copyright'],
                                                { length: 60 }
                                            )
                                        )}</summary>
                                        <p>
                                            ${strip(data['licenseText'])}
                                        </p>
                                    </details>
                                </p>
                                ${
                                    data['url'] !== '' || data['repository'] !== ''
                                        ? `
                                <a href="${strip(
                                    data['repository'] !== '' ? data['repository'] : data['url']
                                )}" class="mx-auto mt-2 btn btn-primary w-fit">
                                    Seite besuchen <i class="ml-2 bi bi-arrow-box-right"></i>
                                </a>`
                                        : ''
                                }
                            </div>
                        </div>
                        `;
                    })
                    .join('')}
            </div>
            `;
        })();
        return helper_cache['attributions'];
    } else {
        console.warn("Failed to open license index. The index can be generated by using 'yarn pre:generate-licenses'");
        return '';
    }
});

// true = red, false = blue
hexo.extend.helper.register('color', () => {
    return hexo.theme.config.domains.some((domain_mapping) => {
        return Object.values(domain_mapping)[0].indexOf(process.env.DOMAIN) !== -1;
    });
});

hexo.extend.helper.register('chapters', (page, theme) => {
    let prev = null,
        next = null;

    if (
        page.categories !== undefined &&
        page.categories.data.some((category) => {
            return category.name === 'chapters';
        })
    ) {
        let order = theme.chapters[page.title][1]['order'];

        let vals = order.map(function (map) {
            return map[Object.keys(map)[0]];
        });

        let idx = vals.indexOf(`/${page.path}`);

        if (idx !== -1) {
            let mapped = order.map(function (map, map_idx) {
                return [Object.keys(map)[0], vals[map_idx]];
            });

            prev = idx !== 0 ? mapped[idx - 1] : null;
            next = idx !== vals.length ? mapped[idx + 1] : null;
        }
    }

    return {
        prev,
        next,
    };
});
