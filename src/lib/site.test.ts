import { describe, expect, it } from "vitest";
import { navLinks, site, whatsappLink } from "./site";

describe("site (configuração central)", () => {
  it("expõe os dados essenciais do estúdio", () => {
    expect(site.name).toBe("Lene Studio Beauty");
    expect(site.pro).toBe("Marlene Dias");
    expect(site.phoneDisplay).toMatch(/^\+55 \d{2} \d{5}-\d{4}$/);
  });

  it("mantém o telefone do WhatsApp apenas com dígitos (DDI + DDD + número)", () => {
    expect(site.phoneRaw).toMatch(/^\d{10,13}$/);
    expect(site.phoneRaw).not.toContain("-");
    expect(site.phoneRaw).not.toContain("+");
    expect(site.phoneRaw).not.toContain(" ");
  });

  it("gera URL do Google Maps válida e codificada", () => {
    expect(site.mapsUrl).toMatch(/^https:\/\/www\.google\.com\/maps\/search\/\?api=1&query=/);
    // O endereço contém espaços — devem estar percent-encoded, nunca crus.
    expect(site.mapsUrl).not.toMatch(/ /);
    expect(site.mapsUrl).toContain(encodeURIComponent("Presidente Prudente"));
  });
});

describe("whatsappLink", () => {
  it("usa a mensagem padrão quando nenhuma é informada", () => {
    const url = whatsappLink();
    expect(url).toMatch(/^https:\/\/wa\.me\/5518996348235\?text=/);
    expect(decodeURIComponent(url)).toContain(site.defaultMessage);
  });

  it("codifica mensagens customizadas de forma segura na query string", () => {
    const url = whatsappLink("Olá! Quero agendar <mecha> & luzes");
    expect(url).toContain(`text=${encodeURIComponent("Olá! Quero agendar <mecha> & luzes")}`);
    // Nunca deve conter caracteres crus perigosos em query string
    expect(url).not.toMatch(/[<>&"'](?![^?]*&)/);
  });

  it("nunca permite injeção de novos parâmetros via mensagem", () => {
    // Tentativa clássica: a mensagem não pode "escapar" do parâmetro text
    const url = whatsappLink("msg&phone=1234#outra-coisa");
    const text = new URL(url).searchParams.get("text");
    expect(text).toBe("msg&phone=1234#outra-coisa");
    expect(new URL(url).search).not.toContain("phone=1234&");
  });
});

describe("navLinks", () => {
  it("aponta todas as âncoras para seções válidas da landing page", () => {
    const secoesExistentes = [
      "inicio",
      "servicos",
      "galeria",
      "antes-e-depois",
      "depoimentos",
      "sobre",
      "agendamento",
    ];
    for (const link of navLinks) {
      expect(link.href).toMatch(/^#[a-z-]+$/);
      expect(secoesExistentes).toContain(link.href.slice(1));
    }
  });

  it("não tem âncoras duplicadas nem rótulos vazios", () => {
    const hrefs = navLinks.map((l) => l.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
    for (const link of navLinks) {
      expect(link.label.length).toBeGreaterThan(0);
      expect(link.short.length).toBeGreaterThan(0);
    }
  });

  it("não contém links com protocolos perigosos (javascript:, data:)", () => {
    for (const link of navLinks) {
      expect(link.href.startsWith("javascript:")).toBe(false);
      expect(link.href.startsWith("data:")).toBe(false);
    }
  });
});
