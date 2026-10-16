import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";
import { site, whatsappLink } from "../lib/site";

/**
 * Teste de integração da landing page completa.
 * Garante que todas as seções âncora existem (navegação do header/footer
 * nunca quebra) e que nenhum link externo fica inseguro.
 */
describe("Landing page (integração)", () => {
  it("renderiza todas as seções com as âncoras usadas pela navegação", () => {
    const { container } = render(<Home />);
    const secoes = [
      "inicio",
      "servicos",
      "galeria",
      "antes-e-depois",
      "depoimentos",
      "sobre",
      "agendamento",
    ];
    for (const id of secoes) {
      expect(
        container.querySelector(`section#${id}`),
        `Seção #${id} deve existir (navegação depende dela)`,
      ).not.toBeNull();
    }
  });

  it("exibe o título principal (hero) com chamada do estúdio", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1 }),
    ).toHaveTextContent(/melhor versão/i);
    expect(screen.getByText("Agende direto pelo WhatsApp")).toBeInTheDocument();
  });

  it("auditoria de segurança: todo link externo abre em nova aba com rel seguro", () => {
    const { container } = render(<Home />);
    const anchors = Array.from(container.querySelectorAll("a"));
    const externos = anchors.filter((a) =>
      (a.getAttribute("href") ?? "").startsWith("https://"),
    );

    // A landing tem links para WhatsApp, Maps e Instagram — nenhum pode ficar sem proteção.
    expect(externos.length).toBeGreaterThan(0);
    for (const link of externos) {
      expect(link.getAttribute("target")).toBe("_blank");
      const rel = link.getAttribute("rel") ?? "";
      expect(rel).toContain("noreferrer");
    }
  });

  it("auditoria de segurança: nenhum link usa protocolo perigoso", () => {
    const { container } = render(<Home />);
    const anchors = Array.from(container.querySelectorAll("a"));
    for (const link of anchors) {
      const href = link.getAttribute("href") ?? "";
      expect(href.startsWith("javascript:")).toBe(false);
      expect(href.startsWith("vbscript:")).toBe(false);
      expect(href.startsWith("data:text")).toBe(false);
    }
  });

  it("todos os CTAs de WhatsApp apontam para o mesmo número oficial", () => {
    const { container } = render(<Home />);
    const anchors = Array.from(container.querySelectorAll("a"));
    const whatsapps = anchors.filter((a) =>
      (a.getAttribute("href") ?? "").startsWith("https://wa.me/"),
    );
    expect(whatsapps.length).toBeGreaterThan(0);
    for (const link of whatsapps) {
      expect(link.getAttribute("href")).toBe(whatsappLink());
    }
  });

  it("todas as imagens têm texto alternativo (acessibilidade + SEO)", () => {
    const { container } = render(<Home />);
    const imagens = container.querySelectorAll("img");
    expect(imagens.length).toBeGreaterThan(0);
    for (const img of imagens) {
      expect(img.getAttribute("alt")).not.toBeNull();
    }
  });
});
