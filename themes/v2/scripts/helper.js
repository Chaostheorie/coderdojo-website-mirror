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

// chapter helper and collector for sidenav
const is_chapter = (page) => {
    return page.categories.data.some((category) => {
        return category.name === 'chapters';
    });
};

hexo.extend.helper.register('chapter_order', (page, theme) => {
    return theme.chapters[page.title][1]['order']
        .map((map) => {
            return [Object.keys(map)[0], map];
        })
        .map((map) => {
            return [map[0], map[1][map[0]]];
        });
});

hexo.extend.helper.register('is_chapter', is_chapter);

hexo.extend.helper.register('chapters', (page, theme) => {
    // simple checks to identify next and prev item in order of chapter
    // order is pulled from _config.yml and identified over paths

    let prev = null,
        next = null;

    if (page.categories !== undefined && is_chapter(page)) {
        // sometimes I wish I had haskell for these jobs
        let order = theme.chapters[page.title][1]['order'];

        let map_indices = order.map((map) => {
            return [Object.keys(map)[0], map];
        });

        let vals = map_indices.map((map) => {
            return map[1][map[0]];
        });

        let idx = vals.indexOf(`/${page.path}`);

        if (idx !== -1) {
            let mapped = map_indices.map((map, map_idx) => {
                return [map[0], vals[map_idx]];
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
