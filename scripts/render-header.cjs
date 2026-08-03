const { execFileSync } = require('node:child_process');
const { copyFileSync, existsSync, mkdtempSync, readdirSync, rmSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join, resolve } = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');

const WIDTH = 1200;
const HEIGHT = 300;
const FPS = 15;
const FRAME_COUNT = 90;

/** Locates a system Chrome installation without downloading another browser. */
function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  ];
  const executablePath = candidates.find(candidate => candidate && existsSync(candidate));
  if (!executablePath) throw new Error('Chrome not found. Set CHROME_PATH before rendering.');
  return executablePath;
}

/** Captures deterministic SVG animation frames by controlling the SVG clock. */
async function captureFrames(frameDirectory) {
  const browser = await chromium.launch({ executablePath: findChrome(), headless: true });
  const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT } });
  await page.goto(pathToFileURL(resolve('assets/tech-stack-header.svg')).href);
  for (let frame = 0; frame < FRAME_COUNT; frame += 1) {
    await page.evaluate(time => {
      document.documentElement.pauseAnimations();
      document.documentElement.setCurrentTime(time);
    }, frame / FPS);
    await page.screenshot({ path: join(frameDirectory, `frame-${String(frame).padStart(3, '0')}.png`) });
  }
  await browser.close();
}

/** Encodes the frames as lossless WebP and preserves a static PNG fallback. */
function encodeAnimation(frameDirectory) {
  execFileSync('ffmpeg', [
    '-y', '-loglevel', 'error', '-framerate', String(FPS),
    '-i', join(frameDirectory, 'frame-%03d.png'), '-loop', '0',
    '-c:v', 'libwebp_anim', '-lossless', '0', '-quality', '92', '-compression_level', '6', '-f', 'webp',
    resolve('assets/tech-stack-header.webp')
  ], { stdio: 'inherit' });
  copyFileSync(join(frameDirectory, 'frame-000.png'), resolve('assets/tech-stack-header.png'));
}

/** Runs the renderer and always removes its temporary frame directory. */
async function main() {
  const frameDirectory = mkdtempSync(join(tmpdir(), 'profile-header-'));
  try {
    await captureFrames(frameDirectory);
    encodeAnimation(frameDirectory);
    console.log(`Rendered ${readdirSync(frameDirectory).length} frames at ${FPS} FPS.`);
  } finally {
    rmSync(frameDirectory, { recursive: true, force: true });
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
