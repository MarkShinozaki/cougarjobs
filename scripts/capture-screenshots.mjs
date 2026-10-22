import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const BASE = process.env.BASE_URL ?? "http://127.0.0.1:3000";
const OUT = "/opt/cursor/artifacts/screenshots";

const captures = [
  { path: "/", name: "after-v3-home-desktop", width: 1440, height: 900 },
  { path: "/", name: "after-v3-home-mobile", width: 390, height: 844 },
  { path: "/jobs", name: "after-v3-jobs-desktop", width: 1440, height: 900 },
  { path: "/jobs", name: "after-v3-jobs-mobile", width: 390, height: 844 },
  { path: "/network", name: "after-v3-network-desktop", width: 1440, height: 900 },
  { path: "/network", name: "after-v3-network-mobile", width: 390, height: 844 },
];

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });

for (const shot of captures) {
  const context = await browser.newContext({
    viewport: { width: shot.width, height: shot.height },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await page.goto(`${BASE}${shot.path}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  const file = path.join(OUT, `${shot.name}.png`);
  await page.screenshot({ path: file, fullPage: false });
  await context.close();
  console.log(`saved ${file} (${shot.width}x${shot.height})`);
}

await browser.close();
