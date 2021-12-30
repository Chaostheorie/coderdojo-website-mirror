hexo.extend.helper.register('title_case', (str) => {
    if (typeof str === 'string') {
        return str.replace(str[0], str[0].toUpperCase()).replace(str[1], str[1].toLowerCase());
    } else {
        console.warn(`title_case helper called on non-string item: ${str}`);
        return str;
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
