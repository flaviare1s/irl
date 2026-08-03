// Converte para WebP as imagens de src/assets que estão realmente importadas
// no código, reescreve os imports e apaga o original.
//
// A largura alvo vem do tamanho em que a imagem é EXIBIDA, com 2x para tela
// retina. Não adianta servir 3024px numa foto que aparece em 500px.
//
// Uso: npm run images

import { readFileSync, writeFileSync, readdirSync, statSync, unlinkSync } from "node:fs";
import { join, resolve, relative, sep, dirname, extname } from "node:path";
import sharp from "sharp";

const SRC = "src";
const IMG_RE = /\.(jpe?g|png)$/i;

// [padrão do caminho, largura máxima] — primeira regra que casar vence.
const LARGURAS = [
  [/bg-ods-mobile\./i, 828],   // fundo full-bleed no mobile
  [/bg-ods\./i, 1920],         // fundo full-bleed no desktop
  [/banner-mobile\./i, 828],
  [/banner\./i, 1920],
  [/(inae|miguel|mycael)\./i, 150],  // avatar de depoimento, 50px @3x
  [/documentos\//i, 900],      // modal max-w-md (~448px) @2x
  [/elementos\//i, 300],
  [/parceiros\//i, 300],
  [/\/ods\//i, 300],
  [/logo-/i, 300],
];
const PADRAO = 1000; // fotos em max-w-[500px] @2x

const larguraDe = (p) => LARGURAS.find(([re]) => re.test(p))?.[1] ?? PADRAO;

const listar = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const fp = join(dir, f);
    return statSync(fp).isDirectory() ? listar(fp) : [fp];
  });

const arquivosFonte = listar(SRC).filter((f) => /\.(jsx?|css)$/i.test(f));

// Mapeia import -> caminho absoluto no disco, para só converter o que é usado.
const usadas = new Map();
for (const arq of arquivosFonte) {
  const txt = readFileSync(arq, "utf8");
  for (const m of txt.matchAll(/["'](\.[^"']*?\.(?:jpe?g|png))["']/gi)) {
    usadas.set(resolve(dirname(arq), m[1]), true);
  }
}

const todas = listar(join(SRC, "assets")).filter((f) => IMG_RE.test(f));
const naoUsadas = todas.filter((f) => !usadas.has(resolve(f)));

let antes = 0, depois = 0, n = 0;

for (const abs of usadas.keys()) {
  const rel = relative(".", abs).split(sep).join("/");
  const destino = abs.replace(IMG_RE, ".webp");
  const largura = larguraDe(abs.replace(/\\/g, "/"));
  const ehPng = extname(abs).toLowerCase() === ".png";

  const origem = statSync(abs).size;
  await sharp(abs)
    .resize({ width: largura, withoutEnlargement: true })
    // PNG costuma ser logo/ilustração com borda dura e alpha: qualidade maior.
    .webp({ quality: ehPng ? 90 : 80 })
    .toFile(destino);

  const novo = statSync(destino).size;
  antes += origem;
  depois += novo;
  n++;
  console.log(
    `${String(Math.round(origem / 1024)).padStart(6)}KB -> ${String(Math.round(novo / 1024)).padStart(5)}KB  (${largura}px)  ${rel}`
  );
  unlinkSync(abs);
}

// Reescreve os imports para .webp
for (const arq of arquivosFonte) {
  const txt = readFileSync(arq, "utf8");
  const novo = txt.replace(/(["'])(\.[^"']*?)\.(?:jpe?g|png)(["'])/gi, "$1$2.webp$3");
  if (novo !== txt) writeFileSync(arq, novo);
}

console.log(`\n${n} imagens: ${(antes / 1048576).toFixed(1)}MB -> ${(depois / 1048576).toFixed(1)}MB`);
if (naoUsadas.length) {
  console.log(`\nNão importadas em lugar nenhum (mantidas intactas):`);
  naoUsadas.forEach((f) => console.log("  " + f));
}
