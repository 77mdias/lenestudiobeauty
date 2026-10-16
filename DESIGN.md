---
name: Lene Studio Beauty
source: Stitch project "Beauty Salon Landing Page" (projects/3932827927975072124)
version: 1.0
---

# Lene Studio Beauty — Design System

> Sistema de design do ateliê de alta estética e bem-estar comandado por
> **Marlene Dias**. Fonte da verdade: projeto **Beauty Salon Landing Page** no
> Stitch (`projects/3932827927975072124`, screen `984e7839ddb14d76a2e85ba10ab1239e`).
> O HTML de referência está em [`stitch/landing-page.html`](./stitch/landing-page.html).

## 1. Brand & Style

O sistema transmite **luxo sob medida, elegância serena e empoderamento
feminino** para um ateliê de beleza de alto padrão. Público que enxerga o
autocuidado como um ritual elevado, exigindo atenção impecável aos detalhes,
profissionalismo e acolhimento.

A estética funde **Modern Luxury Editorial** com **Tactile Glass Warmth**:

- **Espaço generoso** e composição delicada, evocando revistas de alta-costura.
- **Acentos metálicos radiantes** (champanhe e rosé gold) sobre **ameixa profunda**,
  comunicando autoridade, artesanato e intimidade.
- **Superfícies táteis e glassmórficas** com iluminação ambiente suave.
- **Interações fluidas e polidas** que reforçam a confiança e o agendamento sem esforço.

### Princípios

1. **Editorial antes de decorativo** — tipografia serifada dramática conduz a narrativa.
2. **Calor, não esterilidade** — neutros quentes (alabastro/marfim) nunca branco puro duro.
3. **Luz em vez de sombra** — profundidade por camadas luminosas, não por sombras duras.
4. **Ritual, não correria** — respiro vertical generoso; nada denso.

## 2. Cores

Fundamento neutro-alabastro + joia profunda + ouro metálico.

### Marca / Papéis principais

| Token | Hex | Uso |
| --- | --- | --- |
| `primary` | `#8a4853` | Rosé gold core: CTAs primários, estados ativos, glows |
| `primary-container` | `#a6606b` | Hover do primário, gradientes rosé |
| `on-primary` | `#ffffff` | Texto/ícone sobre o primário |
| `secondary` | `#8d4574` | Ameixa/plum: CTAs de alto impacto, badges, ícones |
| `secondary-container` | `#fda6da` | Containers secundários rosados |
| `tertiary` | `#735c00` | Champanhe gold: badges, VIP, estrelas, bordas finas |
| `tertiary-container` | `#cba72f` | Preenchimentos/destaques dourados |
| `surface` / `background` | `#fcf9f7` | Canvas base (Soft Alabaster quente) |
| `on-surface` | `#1b1c1b` | Texto principal (grafite umber, nunca preto puro) |
| `on-surface-variant` | `#524345` | Texto secundário/corpo editorial |
| `outline` | `#857374` | Bordas/bordas de campos |
| `outline-variant` | `#d7c1c3` | Divisores sutis |

### Superfícies (tiers de elevação)

| Token | Hex | Papel |
| --- | --- | --- |
| `surface-container-lowest` | `#ffffff` | Cards e sheets elevados (Optical Pure) |
| `surface-container-low` | `#f6f3f1` | Fundo de seção alternativo |
| `surface-container` | `#f0edeb` | Chips, inputs, blocos neutros |
| `surface-container-high` | `#eae8e6` | Hover de superfície |
| `surface-container-highest` | `#e5e2e0` | Divisores fortes / fundos rebaixados |
| `inverse-surface` | `#30302f` | Overlays “Antes”, tooltips escuros |
| `inverse-on-surface` | `#f3f0ee` | Texto sobre superfície inversa |

### Fixas e semânticas

| Token | Hex | Uso |
| --- | --- | --- |
| `primary-fixed` | `#ffd9dd` | Fundos rosé claros |
| `primary-fixed-dim` | `#ffb2bc` | Realce rosé |
| `secondary-fixed` | `#ffd8ec` | Camadas rosadas suaves (acentos de hero) |
| `secondary-fixed-dim` | `#ffaede` | Realce rosado |
| `tertiary-fixed` | `#ffe088` | Fundos dourados claros |
| `tertiary-fixed-dim` | `#e9c349` | Realce dourado |
| `error` | `#ba1a1a` | Estados de erro |
| `error-container` | `#ffdad6` | Fundo de erro |

**Utility especial:** WhatsApp Emerald `#25D366` — usar com parcimônia, sempre
sobre pílulas com glow champanhe.

## 3. Tipografia

O contraste entre **Playfair Display** (romântico, alta-costura) e **Plus Jakarta
Sans** (humanista, geométrico, legível) define a identidade.

- **Playfair Display** → títulos, numerais de preço, citações/depoimentos. Serifas
  de alto contraste, toque europeu clássico e itálico elegante.
- **Plus Jakarta Sans** → interface, corpo, listas de serviços, tags e labels.
- **Disciplina de tracking:** labels, categorias e eyebrows em `uppercase` com
  tracking `0.08em`–`0.12em` (evoca embalagem de luxo). Títulos usam tracking
  neutro a negativo.

### Escala

| Token | Família | Size | Line-height | Weight | Tracking |
| --- | --- | --- | --- | --- | --- |
| `display` | Playfair Display | 56px | 64px | 600 | -0.02em |
| `display-mobile` | Playfair Display | 38px | 46px | 600 | -0.01em |
| `headline-lg` | Playfair Display | 40px | 48px | 500 | -0.015em |
| `headline-lg-mobile` | Playfair Display | 28px | 36px | 500 | -0.01em |
| `headline-md` | Playfair Display | 28px | 36px | 500 | — |
| `headline-sm` | Playfair Display | 22px | 30px | 600 | — |
| `title-md` | Plus Jakarta Sans | 18px | 26px | 600 | — |
| `body-lg` | Plus Jakarta Sans | 17px | 28px | 400 | — |
| `body-md` | Plus Jakarta Sans | 15px | 24px | 400 | — |
| `body-sm` | Plus Jakarta Sans | 13px | 20px | 400 | — |
| `label-lg` | Plus Jakarta Sans | 14px | 20px | 600 | 0.08em |
| `label-sm` | Plus Jakarta Sans | 11px | 16px | 600 | 0.12em |

**Ícones:** Material Symbols Outlined (variable font).

## 4. Layout & Spacing

- Grid fluido de **12 colunas**, container máx. **1280px** (`max-w-7xl`), gutter
  `1.5rem` desktop / `1rem` mobile.
- **Respiro vertical macro:** seções com `py-24` (≈6rem) e `space-xl`
  (`3.5rem`) entre blocos — a experiência deve parecer sem pressa e exclusiva.
- **Assimetria editorial:** cards fotográficos full-bleed intercalados com blocos
  de texto deslocados.
- **Tap ergonomics:** alvos de toque ≥ 48px no mobile; barra de agendamento com
  safe-area inferior.

### Tokens de espaço

`space-xs` 0.375rem · `space-sm` 0.75rem · `space-md` 1.25rem · `space-lg` 2rem ·
`space-xl` 3.5rem · `margin` 3rem · `margin-mobile` 1.25rem · `gutter` 1.5rem ·
`gutter-mobile` 1rem

## 5. Elevação & Profundidade

Evita sombras sintéticas duras em favor de camadas atmosféricas luminosas.

- **Base canvas:** `#fcf9f7`.
- **Cards/sheets:** `#ffffff` sólido ou glass tinted `rgba(255,255,255,0.82)` +
  `backdrop-filter: blur(12px)`.
- **Glows ambiente:** halos `blur-3xl` em `primary/10` e `secondary-fixed/40`.
- **Sombras:**
  - Card padrão: `0 8px 30px -8px rgba(44,37,35,0.06), 0 2px 6px -1px rgba(44,37,35,0.03)`
  - Elevado / barra flutuante: `0 20px 40px -12px rgba(88,24,69,0.12), 0 4px 12px -2px rgba(183,110,121,0.15)`
  - Hover de ação rosé: `0 10px 25px -4px rgba(183,110,121,0.35)`
- **Contornos delicados:** 1px `rgba(183,110,121,0.2)` ou champanhe
  `rgba(212,175,55,0.25)`.

### Raios

`sm` 0.25rem · DEFAULT 0.5rem · `md` 0.75rem · `lg` 1rem · `xl` 1.5rem · `full` 9999px

## 6. Componentes

### Botões
- **Primary Rosé Shimmer:** pílula. Gradiente `linear-gradient(135deg,#C88A96 0%,#B76E79 50%,#A45C67 100%)`,
  texto branco, glow interno sutil. Hover eleva com sombra rosé.
- **Plum Signature:** fundo `#581845`, borda champanhe
  (`1px solid rgba(212,175,55,0.4)`), ícone dourado, tipografia branca.
- **WhatsApp Direct Action:** pílula proeminente (inline ou flutuante) com
  acento Emerald + badges Rosé. Microcopy "Agendamento VIP via WhatsApp" com
  indicador pulsante.
- **Ghost/Secundário:** fundo `surface-container`, texto `primary`; hover vira
  `primary` + `on-primary`.

### Cards de serviço
- Fundo branco puro, borda `1px solid rgba(183,110,121,0.18)`, padding `1.25rem`.
- Header: título em Playfair Display, badge de duração em `label-sm` com tint
  champanhe, micro-interação de translate 4px + bloom de sombra no hover.

### Slider Antes & Depois
- Container `rounded-lg` de imagem dupla com máscara em camadas.
- Handle central metálico rosé `#B76E79` com grip circular dourado.
- Pílulas "Antes"/"Depois" flutuantes em vidro fosco (Antes:
  `rgba(44,37,35,0.45)`; Depois: `primary` sólido) com texto serifado.

### Chips & tags
- Pílula, padding horizontal `1rem`, altura `36px`.
- Inativo: `#F5EFEB` + `#2C2523`. Ativo: plum `#581845` + `#FAF7F5`, borda
  fina `#D4AF37`.

### Inputs & seletores de agendamento
- Rounded `0.5rem` sobre `#FFFFFF`. Borda de repouso
  `1px solid rgba(44,37,35,0.15)`.
- Focus: borda rosé `#B76E79` + anel externo `3px rgba(183,110,121,0.15)`.
- Labels em uppercase `label-sm` com tracking.

### Depoimentos / VIP review cards
- Aspas editoriais centradas em champanhe `#D4AF37` a 20% de opacidade.
- 5 estrelas douradas sólidas. Retrato em moldura circular rosé.

## 7. Tom de voz

Elegante, acolhedor e confiante. Fala em **"você"**, celebra a autoestima e
destaca **técnica + cuidado humano**. Evita jargão técnico frio e nomes
rebuscados: os serviços são simples e diretos — **cortes, penteados,
progressivas, luzes e mechas** — as cinco especialidades do estúdio.

## 8. Implementação

- **Tailwind CSS v4** via `@theme` em [`src/app/globals.css`](./src/app/globals.css)
  (tokens de cor, tipografia, spacing, raios).
- **Fontes** carregadas com `next/font/google` em
  [`src/app/layout.tsx`](./src/app/layout.tsx).
- **Ícones** Material Symbols Outlined via stylesheet link.
- **Imagens** do design versionadas em `public/images/stitch/`; fotos reais do
  salão em `public/images/hairs/`; logo em `public/images/logo-transparent.png`.

### Referência de nomes de classe

| Intenção | Classe |
| --- | --- |
| Cor de marca / texto | `text-primary`, `bg-primary`, `text-secondary`, `text-tertiary` |
| Superfícies | `bg-surface`, `bg-surface-container-low`, `bg-surface-container-lowest` |
| Tipografia | `font-display text-display`, `font-headline text-headline-lg`, `font-body-md`, `font-label-sm` |
| Container | `mx-auto max-w-7xl px-6 lg:px-12` |
| Pílula | `rounded-full` |
