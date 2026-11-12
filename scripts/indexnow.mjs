// Tells IndexNow search engines (Bing, Yandex, Naver, Seznam) which pages changed, so they recrawl
// within minutes instead of days. Bing's index also feeds ChatGPT search and Copilot.
// Run after a deploy:  node scripts/indexnow.mjs
import { readdirSync } from "node:fs";

const host = "nishant.top";
const keyFile = readdirSync(new URL("../public/", import.meta.url)).find((name) => /^[0-9a-f]{32}\.txt$/.test(name));
if (!keyFile) throw new Error("No IndexNow key file found in public/");
const key = keyFile.replace(".txt", "");

const sitemap = await (await fetch(`https://${host}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (!urlList.length) throw new Error("Sitemap returned no URLs");

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${keyFile}`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs, status ${response.status} ${response.statusText}`);
if (!response.ok && response.status !== 202) process.exit(1);
