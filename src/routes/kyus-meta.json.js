import { kyus } from "./posts/kyus.svelte";
import { cwd } from "node:process";
import { statSync } from "fs";
import { join as joinPath } from "path";

export function get() {
  // retrieve metadata about kyus and provide enriched kyu data for kyus.svelte
  let enriched_kyus = kyus.map(([count, title, fill, path, href, description]) => {
    const last_updated = statSync(joinPath(cwd(), path)).mtime;

    return [
      count,
      title,
      `${last_updated.getDay()}.${last_updated.getMonth()}.${last_updated.getFullYear()}`,
      fill,
      href,
      description
    ];
  });

  return {
    body: {
      kyus: enriched_kyus
    }
  };
}
