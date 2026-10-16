# Lene Studio Beauty

> Landing page oficial do **Lene Studio Beauty** — ateliê de alta estética capilar de Marlene Dias.
> **URL de produção:** https://lenestudiobeauty.vercel.app

[![CI](https://github.com/77mdias/lenestudiobeauty/actions/workflows/ci.yml/badge.svg)](https://github.com/77mdias/lenestudiobeauty/actions/workflows/ci.yml)
[![CodeQL](https://github.com/77mdias/lenestudiobeauty/actions/workflows/codeql.yml/badge.svg)](https://github.com/77mdias/lenestudiobeauty/actions/workflows/codeql.yml)

## Stack

- **Next.js 16** (App Router, React 19) + **TypeScript**
- **Tailwind CSS 4** com Material Symbols (Google Fonts)
- **Bun** como gerenciador de pacotes e runtime de scripts
- Landing page 100% estática — agendamento via WhatsApp (sem backend)

## Segurança

Camadas de proteção aplicadas:

- **CSP estrita** + `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`, `Permissions-Policy` e HSTS (ver `next.config.ts`)
- `poweredByHeader: false` — não expõe a versão do framework
- Otimizador de imagens **sem origens remotas** (evita SSRF/abuso)
- **Pipeline de CI com gates de segurança** (`.github/workflows/ci.yml`):
  - `bun audit` — falha o build em qualquer vulnerabilidade **critical**
  - **Gitleaks** — varre segredos (chaves, tokens) no código e no histórico
  - **CodeQL** (`.github/workflows/codeql.yml`) — análise estática semanal da GitHub
  - **Dependabot** — mantém as GitHub Actions atualizadas

## Comandos

```bash
bun install            # instalar dependências
bun run dev            # servidor de desenvolvimento (localhost:3000)
bun run build          # build de produção
bun run start          # servir o build de produção

bun run lint           # ESLint
bun run typecheck      # TypeScript (tsc --noEmit)
bun run test           # testes unitários/componentes (Vitest + Testing Library)
bun run test:watch     # testes em modo watch
bun run test:e2e       # testes E2E (Playwright, porta dedicada 3100)
bun run audit          # auditoria de vulnerabilidades das dependências
```

> **Nota E2E:** o Playwright usa a porta **3100** para não conflitar com um
> `next dev` rodando na 3000. O comando sobe e derruba o servidor sozinho.

## Estrutura

```
src/
├── app/                  # App Router (layout + landing page)
├── components/UI/        # Seções da landing (Hero, Services, Gallery…)
├── lib/site.ts           # Configuração central (contato, WhatsApp, navegação)
└── test/setup.ts         # Setup do Vitest (jest-dom)
e2e/                      # Testes E2E (Playwright)
.github/workflows/        # CI (qualidade + E2E + segurança) e CodeQL
```

## Deploy (Vercel)

O deploy é feito por **integração Git**: cada push em `main` publica
automaticamente, e cada PR ganha um preview.

1. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório `77mdias/lenestudiobeauty`
2. **Importante:** nomeie o projeto como `lenestudiobeauty` — é isso que define o domínio `lenestudiobeauty.vercel.app`
3. Framework preset: **Next.js** (detectado automaticamente), sem variáveis de ambiente necessárias
4. Deploy — pronto ✅

Domínio próprio (`lenestudiobeauty.com.br`): Project Settings → Domains, apontando o DNS conforme instruções da Vercel.
