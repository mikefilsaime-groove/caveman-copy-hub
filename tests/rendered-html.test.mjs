import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { access, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import test from "node:test";

const run = promisify(execFile);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Caveman Copy Hub", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Caveman Copy Hub — Mike Filsaime<\/title>/i);
  assert.match(html, /Caveman Copy turns features into/);
  assert.match(html, /reasons to buy\./);
  assert.match(html, /Showcase Website/);
  assert.match(html, /COPY-PASTE STARTER/);
  assert.match(html, /Not sure which skill to use\? Start here\./);
  assert.match(html, /06 SKILLS/);
  assert.match(html, /caveman-copy-hub-social\.png/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton/);
});

test("ships the six-skill bundle and branded share image", async () => {
  const bundleUrl = new URL(
    "../public/downloads/caveman-copy-skill-system.zip",
    import.meta.url,
  );
  const socialUrl = new URL(
    "../public/caveman-copy-hub-social.png",
    import.meta.url,
  );

  await Promise.all([access(bundleUrl), access(socialUrl)]);
  const [bundleStat, socialStat] = await Promise.all([
    stat(bundleUrl),
    stat(socialUrl),
  ]);
  assert.ok(bundleStat.size > 10_000);
  assert.ok(socialStat.size > 100_000);

  const { stdout } = await run("unzip", ["-Z1", fileURLToPath(bundleUrl)]);
  for (const skill of [
    "caveman-copy/",
    "caveman-product-showcase/",
    "caveman-website-copy/",
    "caveman-showcase-website/",
    "product-visual-proof/",
    "wordsmithing-skill/",
  ]) {
    assert.match(stdout, new RegExp(`^${skill}`, "m"));
  }
  assert.match(stdout, /^caveman-showcase-website\/DESIGN\.md$/m);
});
