import { generateFeed } from "$lib/feed.js";

export async function GET() {
  return {
    headers: {
      "Cache-Control": "max-age=0, s-maxage=3600",
      "Content-Type": "application/xml"
    },
    body: generateFeed("atom")
  };
}
