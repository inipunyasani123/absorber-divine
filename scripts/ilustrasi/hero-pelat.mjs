// Hero "Spesimen I — Sachet dalam kemasan" (konsep Plate Botani): cat air pomologi USDA (domain publik) untuk mangga &
// pisang + sachet EthyleneGuard digambar sendiri bergaya ukiran botani. Keluaran: HTML 1000x1250 untuk dirender Chrome.
// Pemakaian: node scripts/ilustrasi/hero-pelat.mjs <out.html> <folder-font> <mangga.jpg> <pisang.jpg>
import { writeFileSync } from 'node:fs'
import path from 'node:path'
const [, , out, fontdir, mangga, pisang] = process.argv
const INK = '#1b3b2f', BRASS = '#a3822f', PAPER = '#f6f2e8'
const arsir = (x0, y0, x1, y1, step = 9) => { let d = ''; for (let x = x0; x < x1 + (y1 - y0); x += step) d += `M${x} ${y0} L${x - (y1 - y0)} ${y1} `; return d }
const sachet = `<svg viewBox="0 0 420 560" width="420" height="560" xmlns="http://www.w3.org/2000/svg" style="overflow:visible">
  <defs><clipPath id="badan"><path d="M40 52 Q210 40 380 52 L372 516 Q210 528 48 516 Z"/></clipPath>
  <pattern id="garis" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)"><line x1="0" y1="0" x2="0" y2="7" stroke="${INK}" stroke-width="1" stroke-opacity="0.55"/></pattern></defs>
  <ellipse cx="226" cy="532" rx="190" ry="18" fill="${INK}" opacity="0.12"/>
  <path d="M40 52 Q210 40 380 52 L372 516 Q210 528 48 516 Z" fill="#fbf8f1" stroke="${INK}" stroke-width="2.6"/>
  <g clip-path="url(#badan)"><rect x="300" y="40" width="90" height="500" fill="url(#garis)"/><path d="M40 470 Q210 500 380 470 L380 540 L40 540Z" fill="url(#garis)" opacity="0.6"/></g>
  <path d="M40 52 Q210 40 380 52" fill="none" stroke="${INK}" stroke-width="1.2"/><path d="M44 86 Q210 74 377 86" fill="none" stroke="${INK}" stroke-width="1" stroke-dasharray="2 5"/>
  <path d="M50 482 Q210 494 372 482" fill="none" stroke="${INK}" stroke-width="1" stroke-dasharray="2 5"/>
  <rect x="84" y="128" width="252" height="152" fill="none" stroke="${BRASS}" stroke-width="1.6"/><rect x="92" y="136" width="236" height="136" fill="none" stroke="${BRASS}" stroke-width="0.8"/>
  <text x="210" y="196" text-anchor="middle" style="font-family:'Fraunces';font-style:italic;font-weight:500;font-size:40px" fill="${INK}">Ethylene</text>
  <text x="210" y="238" text-anchor="middle" style="font-family:'Fraunces';font-style:italic;font-weight:500;font-size:40px" fill="${BRASS}">Guard</text>
  <text x="210" y="262" text-anchor="middle" style="font-family:'Karla';font-weight:700;font-size:12px;letter-spacing:4px" fill="${INK}">PENYERAP ETILEN</text>
  <circle cx="210" cy="356" r="42" fill="none" stroke="${INK}" stroke-width="1.8"/><circle cx="210" cy="356" r="32" fill="#6d4c9f" opacity="0.78"/>
  ${[[198, 346], [218, 350], [206, 366], [224, 368], [196, 368], [212, 336]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#8f73c0" stroke="${INK}" stroke-opacity="0.4"/>`).join('')}
  <text x="210" y="426" text-anchor="middle" style="font-family:'Karla';font-weight:500;font-size:13px;letter-spacing:3px" fill="${INK}">UNGU · AKTIF</text>
  <line x1="150" y1="446" x2="270" y2="446" stroke="${BRASS}" stroke-width="1.4"/>
  </svg>`
const html = `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="file://${path.resolve(fontdir)}/fonts.css"><style>
html,body{margin:0}#p{position:relative;width:1000px;height:1250px;overflow:hidden;background:${PAPER}}
#p::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(27,59,47,.035) 0 1px,transparent 1px 7px)}
.buah{position:absolute;mix-blend-mode:multiply;-webkit-mask-image:radial-gradient(closest-side,#000 78%,transparent 100%);mask-image:radial-gradient(closest-side,#000 78%,transparent 100%)}
#pisang{left:280px;top:190px;width:760px}#mangga{left:-30px;top:430px;width:560px;transform:rotate(-8deg)}
#sachet{position:absolute;left:430px;top:520px;transform:rotate(4deg);filter:drop-shadow(0 18px 24px rgba(27,59,47,.18))}
.label{position:absolute;left:64px;top:80px;font-family:'Karla';font-weight:700;font-size:15px;letter-spacing:.32em;color:${BRASS}}
.label i{display:block;margin-top:10px;font-family:'Fraunces';font-style:italic;font-weight:500;font-size:30px;letter-spacing:0;color:${INK}}
.garis{position:absolute;left:64px;right:64px;bottom:72px;border-top:1px solid rgba(27,59,47,.35);border-bottom:1px solid rgba(27,59,47,.35);height:6px}
</style></head><body><div id="p">
<img class="buah" id="pisang" src="file://${path.resolve(pisang)}"><img class="buah" id="mangga" src="file://${path.resolve(mangga)}">
<div id="sachet">${sachet}</div>
<div class="garis"></div>
</div></body></html>`
writeFileSync(out, html)
console.log(out)
