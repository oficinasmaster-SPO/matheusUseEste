# Plano de Guerra 2027 — página de captação

Página de captação do lançamento semente **Plano de Guerra 2027** (Oficinas Master), em HTML/CSS/JS puro, sem dependências.

| Arquivo | Uso |
| --- | --- |
| `wordpress-bloco-html.html` | **Fonte da página.** Cole inteiro em um bloco "HTML personalizado" (Gutenberg) ou widget "HTML" (Elementor). |
| `pagina-completa.html` | Documento HTML completo (preview, ou hospedar fora do WordPress). Gerado pelo build. |
| `build.mjs` | Gera `pagina-completa.html` a partir do bloco: `npm run build:plano-de-guerra`. |

## Publicar no WordPress

1. **Páginas → Adicionar nova.** Escolha um template de largura total sem título (o nome muda conforme o tema: "Elementor Canvas", "Largura total", "Sem cabeçalho/rodapé", "Blank"). Se o tema mostrar o título da página, desative-o nas opções da página.
2. **Gutenberg:** adicione o bloco **HTML personalizado** e cole todo o conteúdo de `wordpress-bloco-html.html`.
   **Elementor:** seção de largura total, sem padding, com o widget **HTML**.
3. Edite o bloco `PG27_CONFIG` no topo do arquivo colado (veja abaixo) e publique.

Observações:
- Use o bloco HTML personalizado, **não** o editor clássico: ele aplica `wpautop` e quebra o HTML.
- `<script>` só é salvo por usuários com a permissão `unfiltered_html` (administrador em instalação simples). Em multisite, peça ao super admin.
- Todo o CSS fica escopado em `#pg27`. A página ocupa a largura total mesmo dentro de containers estreitos do tema. Ela não altera cabeçalho, rodapé nem outras páginas.
- O JS usa só comentários `/* */`, então pode passar por minificadores (WP Rocket, Autoptimize, LiteSpeed). Com "atrasar JS" ligado, a página continua visível; só a contagem e as animações começam depois.

## Configuração (`PG27_CONFIG`)

| Chave | O que faz |
| --- | --- |
| `eventDate` | Data/hora do encontro em ISO com fuso (`2026-12-03T20:00:00-03:00`). Preenche datas, contagem regressiva e o link "Adicionar à agenda". `''` esconde a contagem. **O valor atual é exemplo.** |
| `eventDurationMin` | Duração do encontro (agenda e fim do "Acontecendo agora"). |
| `webhookUrl` | Destino dos leads. Vazio = **modo demonstração**: nada é enviado e um aviso amarelo aparece após a inscrição. |
| `webhookFormat` | `'form'`: `x-www-form-urlencoded` sem CORS (n8n, Make, Zapier, RD Station). `'json'`: JSON com CORS e checagem de `res.ok` (API própria/CRM). |
| `extraFields` | Campos fixos em todo envio. RD Station: `{ token_rdstation: '...', identificador: 'plano-de-guerra-2027' }`. |
| `redirectUrl` | Página de obrigado. Se preenchida, redireciona após a inscrição. |
| `whatsappGroupUrl` | Mostra "Falta 1 passo" + botão do grupo na confirmação (quando não há `redirectUrl`). |
| `privacyUrl` | Link da política de privacidade (`''` oculta). |

**Foto dos anfitriões:** procure por `FOTO` no arquivo e cole a URL da imagem no `src` (proporção 4:5, ex. 1000×1250). Sem foto, aparece o monograma "R&F".

## Dados enviados por lead

`nome`, `email` (minúsculo), `whatsapp` (`55` + DDD + número, só dígitos), `whatsapp_formatado`, `faturamento`, `faturamento_label`, `evento` (`plano-de-guerra-2027`), `formulario` (`topo` | `final`), `pagina`, `referrer`, `data_inscricao` (ISO), mais `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `fbclid` e `gclid` quando presentes na URL. As UTMs ficam guardadas no navegador, então valem mesmo se o lead navegar antes de se inscrever. Por fim, entram os `extraFields`.

## Rastreamento

Após uma inscrição bem-sucedida, a página dispara automaticamente, se existirem no site:
- Meta Pixel: `fbq('track', 'Lead')`
- GA4: `gtag('event', 'generate_lead')`
- GTM: `dataLayer.push({ event: 'pg27_lead', form_location })`

Instale pixel/GA4/GTM pelo plugin ou cabeçalho do site, como de costume.

## Proteções do formulário

Validação com mensagens em português, máscara de WhatsApp (aceita colar `+55 ...`), sugestão para e-mails digitados errado (`gmial.com` → `gmail.com`), honeypot anti-spam, timeout de 15s, mensagem de erro com nova tentativa e bloqueio de envio duplo.
