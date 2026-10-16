import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import FloatingWhatsApp from "./FloatingWhatsApp";
import { whatsappLink } from "../../../lib/site";

describe("FloatingWhatsApp (botão fixo)", () => {
  it("renderiza o botão flutuante com o chat correto", () => {
    render(<FloatingWhatsApp />);
    const botao = screen.getByRole("link", {
      name: "Atendimento VIP via WhatsApp",
    });
    expect(botao).toHaveAttribute("href", whatsappLink());
    expect(botao).toHaveAttribute("target", "_blank");
    expect(botao.getAttribute("rel")).toContain("noreferrer");
  });

  it("é acessível mesmo quando o rótulo textual está oculto no mobile", () => {
    render(<FloatingWhatsApp />);
    const botao = screen.getByRole("link", {
      name: "Atendimento VIP via WhatsApp",
    });
    // O aria-label garante acessibilidade; o texto some no mobile via CSS.
    expect(botao).toHaveAccessibleName("Atendimento VIP via WhatsApp");
  });
});
