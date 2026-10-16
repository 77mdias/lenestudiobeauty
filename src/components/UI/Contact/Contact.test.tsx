import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "./Contact";
import { site, whatsappLink } from "../../../lib/site";

describe("Contact (agendamento via WhatsApp)", () => {
  it("renderiza a seção de agendamento com o telefone do estúdio", () => {
    render(<Contact />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Garanta Seu Momento Exclusivo",
    );
    expect(screen.getAllByText(site.phoneDisplay).length).toBeGreaterThan(0);
  });

  it("aponta todos os CTAs para o chat correto do WhatsApp", () => {
    render(<Contact />);
    const expected = whatsappLink();
    const ctas = screen.getAllByRole("link", {
      name: /WhatsApp|Chamar no WhatsApp/i,
    });
    expect(ctas.length).toBeGreaterThan(0);
    for (const cta of ctas) {
      expect(cta).toHaveAttribute("href", expected);
    }
  });

  it("abre links externos em nova aba com rel seguro (noreferrer)", () => {
    render(<Contact />);
    const externos = screen
      .getAllByRole("link")
      .filter((a) => (a.getAttribute("href") ?? "").startsWith("https://"));
    expect(externos.length).toBeGreaterThan(0);
    for (const link of externos) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link.getAttribute("rel")).toContain("noreferrer");
    }
  });

  it("exibe endereço, horários e link de rota no Maps", () => {
    render(<Contact />);
    expect(screen.getByText(site.address.line1)).toBeInTheDocument();
    expect(screen.getByText(site.hours.weekdays)).toBeInTheDocument();
    expect(screen.getByText(site.hours.sunday)).toBeInTheDocument();
    expect(screen.getByText("Como chegar")).toHaveAttribute(
      "href",
      site.mapsUrl,
    );
  });
});
