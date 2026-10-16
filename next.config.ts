import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Content-Security-Policy (CSP).
 *
 * A landing page é 100% estática e self-hosted:
 * - `default-src 'self'` bloqueia qualquer recurso de origens externas por padrão;
 * - `script-src` permite apenas scripts da própria origem + inline (hidratação do
 *   Next.js); `unsafe-eval` somente em dev (HMR do webpack/turbopack);
 * - `style-src` libera o Google Fonts (Material Symbols) e estilos inline;
 * - `img-src` cobre imagens locais otimizadas + data: (fallback SVG);
 * - `frame-ancestors 'none'` + `X-Frame-Options: DENY` impedem clickjacking;
 * - `form-action 'self'` e `object-src 'none'` fecham vetores comuns.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob:",
  `connect-src 'self'${isDev ? " ws:" : ""}`,
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

/** Headers de segurança aplicados a todas as rotas (dev e produção). */
const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /** Não vaza a versão do framework no header `X-Powered-By`. */
  poweredByHeader: false,
  /**
   * Todas as imagens são locais (`public/images`) — nenhuma origem remota
   * é permitida, evitando SSRF/abuso do otimizador de imagens.
   */
  images: {
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
