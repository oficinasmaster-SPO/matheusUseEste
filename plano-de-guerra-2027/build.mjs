// Gera pagina-completa.html a partir do bloco do WordPress (fonte única da página).
// Uso: node plano-de-guerra-2027/build.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = dirname(fileURLToPath(import.meta.url))
const snippet = readFileSync(join(dir, 'wordpress-bloco-html.html'), 'utf8').trim()

// Linhas em branco viram <p> quando o conteúdo passa pelo wpautop (editor clássico).
const blankLines = snippet.split('\n').filter((line) => line.trim() === '').length
if (blankLines > 0) {
  console.error(`wordpress-bloco-html.html tem ${blankLines} linha(s) em branco; remova-as antes de colar no WordPress.`)
  process.exit(1)
}

const description =
  'Encontro online e gratuito para donos de oficinas mecânicas. Descubra as 5 decisões estratégicas para proteger sua margem, aumentar a produtividade e preparar sua oficina para 2027. Com Rafa e Fer Marrafon.'

const favicon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23D90429'/%3E%3Ctext x='16' y='22' text-anchor='middle' font-family='Arial,sans-serif' font-weight='700' font-size='14' fill='white'%3EOM%3C/text%3E%3C/svg%3E"

const page = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Plano de Guerra 2027 | Oficinas Master</title>
<meta name="description" content="${description}">
<meta name="theme-color" content="#0A0A0B">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Oficinas Master">
<meta property="og:title" content="Plano de Guerra 2027 — Encontro online e gratuito para donos de oficinas">
<meta property="og:description" content="${description}">
<!-- <meta property="og:image" content="https://SEU-DOMINIO/og-plano-de-guerra-2027.jpg"> -->
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${favicon}">
<style>html,body{margin:0;padding:0;background:#0A0A0B}</style>
</head>
<body>
${snippet}
</body>
</html>
`

writeFileSync(join(dir, 'pagina-completa.html'), page)
console.log('pagina-completa.html gerada.')
