export const loadTOC = (toccache: {
  [key: string]: {
    [key: string]: {
      headings: string[];
      data: string;
    };
  };
}) => {
  if (title === undefined || toccache[title] === undefined || !showToc) {
    return [null, null, null];
  }

  // in case only one file is associated with the title -> use toclist
  const keys = Object.keys(toccache[title]);
  if (keys.length === 1) {
    return [true, toccache[title][keys[0]].headings, null];
  }

  // extract entries with headings from cache
  const entries = Object.entries(toccache[title]).filter(
    ([_, data]) => data.headings.length > 0
  );

  // otherwise use full-blown tocdropdown
  return [
    false,
    entries
      // extract first headline and transform into easily renderable format
      .map(([entryfilename, data]) => {
        return [entryfilename, data.headings.shift(), data.headings, data.path];
      }),
    entries
      // extract filename and original index in entries
      .map(([entryfilename, _], idx) => [entryfilename, idx])
      // find current entry - this should leave only one
      .filter(([entryfilename, _]) => entryfilename === filename)
      // map current entry optionally to next
      .map(([_, idx]) =>
        entries.length > idx + 1 ? entries[idx + 1][1].path : null
      )[0],
  ];
};
