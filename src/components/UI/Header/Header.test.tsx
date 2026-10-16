import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import { navLinks, site } from "../../../lib/site";

describe("Header", () => {
  it("renderiza a marca do estúdio com link para o início", () => {
    render(<Header />);
    const brand = screen.getByRole("link", {
      name: new RegExp(`${site.name} — ir para o início`),
    });
    expect(brand).toHaveAttribute("href", "#inicio");
    expect(screen.getByText(site.name)).toBeInTheDocument();
    expect(screen.getByText(site.tagline)).toBeInTheDocument();
  });

  it("renderiza todos os links de navegação desktop com âncoras válidas", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: "Navegação principal" });
    for (const link of navLinks) {
      const anchor = within(nav).getByRole("link", { name: link.short });
      expect(anchor).toHaveAttribute("href", link.href);
    }
  });

  it("garante que nenhum link do header usa protocolo perigoso", () => {
    render(<Header />);
    const anchors = screen.getAllByRole("link");
    for (const anchor of anchors) {
      const href = anchor.getAttribute("href") ?? "";
      expect(href.startsWith("javascript:")).toBe(false);
      expect(href.startsWith("data:")).toBe(false);
    }
  });

  it("abre e fecha o menu mobile com estado acessível", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const toggle = screen.getByRole("button", { name: "Abrir menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByRole("navigation", { name: "Navegação principal mobile" }),
    ).not.toBeInTheDocument();

    await user.click(toggle);
    expect(screen.getByRole("button", { name: "Fechar menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    const mobileNav = screen.getByRole("navigation", {
      name: "Navegação principal mobile",
    });
    for (const link of navLinks) {
      expect(
        within(mobileNav).getByRole("link", { name: link.label }),
      ).toHaveAttribute("href", link.href);
    }
  });

  it("fecha o menu mobile ao clicar em um link", async () => {
    const user = userEvent.setup();
    render(<Header />);
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    const mobileNav = screen.getByRole("navigation", {
      name: "Navegação principal mobile",
    });
    await user.click(within(mobileNav).getByRole("link", { name: "Início" }));
    expect(
      screen.queryByRole("navigation", { name: "Navegação principal mobile" }),
    ).not.toBeInTheDocument();
  });
});
