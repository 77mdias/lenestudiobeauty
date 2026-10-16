/**
 * Configuração central do Lene Studio Beauty.
 * Mantém dados de contato, navegação e utilitários do WhatsApp
 * em um único lugar para Header, Footer, Hero, Contato e CTA.
 */

const addressText =
  "Rua Iracema de Almeida Ruiz, 109 - Casa, Montalvão, Presidente Prudente - SP";

export const site = {
  name: "Lene Studio Beauty",
  shortName: "Lene Studio",
  tagline: "Haute Coiffure & Esthétique",
  subtitle: "Alta Estética & Bem-Estar",
  pro: "Marlene Dias",
  phoneDisplay: "+55 18 99634-8235",
  /** Somente dígitos, com DDI — usados no link de chat direto do WhatsApp */
  phoneRaw: "5518996348235",
  email: "contato@lenestudiobeauty.com.br",
  address: {
    line1: "Rua Iracema de Almeida Ruiz, 109 - Casa",
    line2: "Bairro Montalvão — Presidente Prudente, SP",
  },
  /** Link direto para a localização no Google Maps */
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    addressText,
  )}`,
  instagram: "https://instagram.com",
  instagramHandle: "@lenestudiobeauty",
  hours: {
    weekdays: "Segunda a Sexta: 09h às 19h",
    saturday: "Sábado: 08h às 18h",
    sunday: "Domingos: Atendimento exclusivo a Noivas",
  },
  defaultMessage:
    "Olá! Gostaria de agendar um horário no Lene Studio Beauty.",
} as const;

/**
 * Links de navegação.
 * `label` é usado no menu mobile (descritivo) e `short` na barra desktop
 * (compacto, para caber em uma única linha sem quebrar o header).
 */
export const navLinks = [
  { label: "Início", short: "Início", href: "#inicio" },
  { label: "Serviços", short: "Serviços", href: "#servicos" },
  { label: "Transformações & Galeria", short: "Galeria", href: "#galeria" },
  { label: "Antes e Depois", short: "Antes & Depois", href: "#antes-e-depois" },
  { label: "Depoimentos", short: "Depoimentos", href: "#depoimentos" },
  { label: "Sobre Marlene Dias", short: "Sobre", href: "#sobre" },
  { label: "Contato / Agendamento", short: "Contato", href: "#agendamento" },
] as const;

/**
 * Link de chat direto do WhatsApp (formato wa.me) com mensagem opcional.
 * Ex.: https://wa.me/5518996348235?text=Olá!...
 */
export function whatsappLink(message: string = site.defaultMessage): string {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}
