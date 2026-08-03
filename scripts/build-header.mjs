import { mkdir, writeFile } from 'node:fs/promises';

const DEVICON_REVISION = '7330accdbc47e2dc0c19789a48533c4a3c50fe58';
const DEVICON_BASE = `https://raw.githubusercontent.com/devicons/devicon/${DEVICON_REVISION}/icons`;

const icons = [
  { name: 'python', path: 'python/python-original.svg', x: 34, y: 30, accent: '#5A9FD4', motion: '34 30;34 12;44 22;28 38;34 30', duration: 6, begin: -1.1 },
  { name: 'angular', path: 'angular/angular-original.svg', x: 302, y: 25, accent: '#F60A48', motion: '302 25;292 39;306 48;314 18;302 25', duration: 6, begin: -3.4 },
  { name: 'nginx', path: 'nginx/nginx-original.svg', x: 786, y: 24, accent: '#009900', motion: '786 24;798 38;790 52;776 33;786 24', duration: 6, begin: -2.2 },
  { name: 'docker', path: 'docker/docker-original.svg', x: 1070, y: 31, accent: '#28B8EB', motion: '1070 31;1058 18;1066 47;1080 40;1070 31', duration: 6, begin: -4.8 },
  { name: 'postgresql', path: 'postgresql/postgresql-original.svg', x: 45, y: 197, accent: '#336791', motion: '45 197;54 181;61 206;39 214;45 197', duration: 6, begin: -2.9 },
  { name: 'django', path: 'django/django-plain.svg', x: 183, y: 210, accent: '#44B78B', motion: '183 210;174 193;188 188;198 216;183 210', duration: 6, begin: -4.1 },
  { name: 'typescript', path: 'typescript/typescript-original.svg', x: 405, y: 205, accent: '#3178C6', motion: '405 205;396 218;412 224;420 192;405 205', duration: 6, begin: -1.7 },
  { name: 'git', path: 'git/git-original.svg', x: 656, y: 209, accent: '#F34F29', motion: '656 209;646 191;663 186;670 215;656 209', duration: 6, begin: -3.8 },
  { name: 'linux', path: 'linux/linux-original.svg', x: 861, y: 195, accent: '#FCC624', motion: '861 195;874 207;866 221;850 205;861 195', duration: 6, begin: -5.2 },
  { name: 'redis', path: 'redis/redis-original.svg', x: 1075, y: 207, accent: '#D82C20', motion: '1075 207;1062 220;1071 185;1088 194;1075 207', duration: 6, begin: -2.5 }
];

/** Prefixes internal SVG IDs so gradients from different brand icons cannot collide. */
function prefixIds(svg, prefix) {
  return svg
    .replace(/\bid="([^"]+)"/g, `id="${prefix}-$1"`)
    .replace(/url\(#([^)]+)\)/g, `url(#${prefix}-$1)`)
    .replace(/href="#([^"]+)"/g, `href="#${prefix}-$1"`);
}

/** Converts one complete Devicon SVG into an embeddable SVG symbol. */
function createSymbol(name, source) {
  const openingTag = source.match(/<svg\b[^>]*>/i)?.[0] ?? '';
  const viewBox = openingTag.match(/viewBox="([^"]+)"/i)?.[1] ?? '0 0 128 128';
  const fill = openingTag.match(/\sfill="([^"]+)"/i)?.[1];
  const inner = source.replace(/[\s\S]*?<svg\b[^>]*>/i, '').replace(/<\/svg>\s*$/i, '');
  const content = prefixIds(inner, name);
  return `<symbol id="logo-${name}" viewBox="${viewBox}"><g${fill ? ` fill="${fill}"` : ''}>${content}</g></symbol>`;
}

/** Downloads the pinned Devicon sources and returns self-contained SVG symbols. */
async function loadSymbols() {
  return Promise.all(icons.map(async ({ name, path }) => {
    const response = await fetch(`${DEVICON_BASE}/${path}`);
    if (!response.ok) throw new Error(`Could not load ${name}: ${response.status}`);
    return createSymbol(name, await response.text());
  }));
}

/** Builds an animated logo card while keeping the official logo geometry unchanged. */
function createCard(icon) {
  const { name, x, y, accent, motion, duration, begin } = icon;
  return `<g aria-label="${name}" transform="translate(${x} ${y})">
    <animateTransform attributeName="transform" type="translate" values="${motion}" dur="${duration}s" begin="${begin}s" repeatCount="indefinite" />
    <rect class="card-shadow" x="-5" y="-5" width="88" height="88" rx="23" fill="${accent}" opacity=".14" filter="url(#soft-blur)" />
    <rect class="card" width="78" height="78" rx="19" />
    <rect x="1" y="1" width="76" height="76" rx="18" fill="none" stroke="${accent}" stroke-width="1.4">
      <animate attributeName="stroke-opacity" values=".35;1;.35" dur="${duration / 2}s" begin="${begin}s" repeatCount="indefinite" />
    </rect>
    <use href="#logo-${name}" x="13" y="13" width="52" height="52" />
  </g>`;
}

/** Returns the animated connection layer behind the centered profile text. */
function createNetwork() {
  return `<g fill="none" stroke="#38BDF8" stroke-width="1.3" opacity=".34">
    <path d="M73 70 C210 70 255 128 405 145 M341 63 C430 63 444 118 507 141 M825 64 C748 66 739 119 691 142 M1109 72 C973 72 932 126 792 145" />
    <path d="M84 238 C226 238 265 189 410 165 M222 246 C338 246 361 198 467 169 M444 243 C512 237 529 194 555 171 M695 247 C665 224 646 199 635 173 M900 235 C805 235 774 193 708 168 M1114 245 C962 245 920 190 792 164" />
    <animate attributeName="stroke-dasharray" values="2 13;14 5;2 13" dur="3s" repeatCount="indefinite" />
    <animate attributeName="stroke-dashoffset" values="0;-100" dur="2s" repeatCount="indefinite" />
  </g>
  <g fill="#67E8F9" filter="url(#cyan-glow)">
    <circle r="3"><animateMotion dur="3s" repeatCount="indefinite" path="M73 70 C210 70 255 128 405 145" /></circle>
    <circle r="3"><animateMotion dur="6s" begin="-2s" repeatCount="indefinite" path="M1109 72 C973 72 932 126 792 145" /></circle>
    <circle r="3"><animateMotion dur="3s" begin="-1.1s" repeatCount="indefinite" path="M84 238 C226 238 265 189 410 165" /></circle>
    <circle r="3"><animateMotion dur="6s" begin="-3s" repeatCount="indefinite" path="M1114 245 C962 245 920 190 792 164" /></circle>
  </g>`;
}

/** Creates the final, self-contained animated header SVG. */
function createHeader(symbols) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="300" viewBox="0 0 1200 300" role="img" aria-labelledby="title description">
  <title id="title">René Theis – Full-Stack Developer</title>
  <desc id="description">Animated technology network with official Python, Angular, Nginx, Docker, PostgreSQL, Django, TypeScript, Git, Linux and Redis logos.</desc>
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#050C19"/><stop offset=".5" stop-color="#081426"/><stop offset="1" stop-color="#071827"/></linearGradient>
    <radialGradient id="orb"><stop stop-color="#0EA5E9" stop-opacity=".22"/><stop offset="1" stop-color="#0EA5E9" stop-opacity="0"/></radialGradient>
    <linearGradient id="name-gradient" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#F8FAFC"/><stop offset=".48" stop-color="#BAE6FD"/><stop offset=".72" stop-color="#FFFFFF"/><stop offset="1" stop-color="#F8FAFC"/><animate attributeName="x1" values="-1;1" dur="3s" repeatCount="indefinite"/><animate attributeName="x2" values="0;2" dur="3s" repeatCount="indefinite"/></linearGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M60 0H0V60" fill="none" stroke="#38BDF8" stroke-opacity=".055"/></pattern>
    <filter id="soft-blur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="9"/></filter>
    <filter id="cyan-glow" x="-300%" y="-300%" width="700%" height="700%"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="text-glow" x="-30%" y="-80%" width="160%" height="260%"><feGaussianBlur in="SourceAlpha" stdDeviation="7" result="b"/><feFlood flood-color="#38BDF8" flood-opacity=".3"/><feComposite in2="b" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    ${symbols.join('\n    ')}
  </defs>
  <style><![CDATA[
    .card { fill: #0B1729; fill-opacity: .94; stroke: #27476A; stroke-width: 1.2; }
    text { font-family: Inter, "Segoe UI", Arial, sans-serif; }
    @media (prefers-reduced-motion: reduce) { animate, animateMotion, animateTransform { display: none; } }
  ]]></style>
  <rect width="1200" height="300" fill="url(#background)"/>
  <rect width="1200" height="300" fill="url(#grid)"/>
  <circle cx="280" cy="150" r="245" fill="url(#orb)"><animate attributeName="cx" values="230;970;230" dur="6s" repeatCount="indefinite"/></circle>
  ${createNetwork()}
  <g text-anchor="middle">
    <rect x="489" y="62" width="222" height="26" rx="13" fill="#0C2540" stroke="#38BDF8" stroke-opacity=".55"/>
    <text x="600" y="80" fill="#7DD3FC" font-size="12" font-weight="700" letter-spacing="3">FULL-STACK ENGINEERING</text>
    <text x="600" y="143" fill="url(#name-gradient)" font-size="57" font-weight="800" letter-spacing=".4" filter="url(#text-glow)">René Theis</text>
    <text x="600" y="184" fill="#BAE6FD" font-size="25" font-weight="450" letter-spacing=".5">Full-Stack · Backend · Frontend · Deployment</text>
    <rect x="470" y="199" width="260" height="2" rx="1" fill="#0EA5E9" opacity=".35"/>
    <rect x="535" y="199" width="130" height="2" rx="1" fill="#67E8F9" filter="url(#cyan-glow)"><animate attributeName="x" values="470;600;470" dur="3s" repeatCount="indefinite"/><animate attributeName="width" values="32;130;32" dur="3s" repeatCount="indefinite"/></rect>
  </g>
  ${icons.map(createCard).join('\n  ')}
</svg>
`;
}

const symbols = await loadSymbols();
await mkdir('assets', { recursive: true });
await writeFile('assets/tech-stack-header.svg', createHeader(symbols), 'utf8');
