import { expect, test } from "@playwright/test";
import { site, whatsappLink } from "../src/lib/site";

const secoes = [
  "inicio",
  "servicos",
  "galeria",
  "antes-e-depois",
  "depoimentos",
  "sobre",
  "agendamento",
];

test.describe("Landing page — Lene Studio Beauty", () => {
  test("carrega com o título e metadados corretos", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Lene Studio Beauty/);

    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute(
      "content",
      /estética capilar/i,
    );
  });

  test("exibe as informações centrais do estúdio", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText(site.name).first()).toBeVisible();
    await expect(page.locator("h1")).toContainText(/melhor versão/i);
  });

  test("todas as seções âncora da navegação existem", async ({ page }) => {
    await page.goto("/");
    for (const id of secoes) {
      await expect(
        page.locator(`section#${id}`),
        `Seção #${id} deve estar visível`,
      ).toBeAttached();
    }
  });

  test("navegação por âncoras leva às seções (smooth scroll)", async ({
    page,
  }, testInfo) => {
    testInfo.setTimeout(30_000);
    await page.goto("/");
    await page
      .getByRole("navigation", { name: "Navegação principal" })
      .getByRole("link", { name: "Serviços" })
      .click();
    await expect(page.locator("section#servicos")).toBeInViewport();
  });

  test("menu mobile abre e navega corretamente", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const toggle = page.getByRole("button", { name: "Abrir menu" });
    await toggle.click();
    await expect(page.locator("#mobile-nav")).toBeVisible();

    await page
      .locator("#mobile-nav")
      .getByRole("link", { name: "Contato / Agendamento" })
      .click();
    await expect(page.locator("#mobile-nav")).not.toBeVisible();
    await expect(page.locator("section#agendamento")).toBeInViewport();
  });

  test("botões de WhatsApp apontam para o chat oficial com proteção rel", async ({
    page,
  }) => {
    await page.goto("/");
    const esperado = whatsappLink();

    const botaoFlutuante = page.getByRole("link", {
      name: "Atendimento VIP via WhatsApp",
    });
    await expect(botaoFlutuante).toHaveAttribute("href", esperado);
    await expect(botaoFlutuante).toHaveAttribute("target", "_blank");
    await expect(botaoFlutuante).toHaveAttribute("rel", /noreferrer/);

    const ctaContato = page.getByRole("link", {
      name: "Chamar no WhatsApp",
    });
    await expect(ctaContato).toHaveAttribute("href", esperado);
  });

  test("todas as imagens carregam sem quebrar (nenhuma 404)", async ({
    page,
  }) => {
    const falhas: string[] = [];
    page.on("response", (res) => {
      if (
        res.request().resourceType() === "image" &&
        res.status() >= 400
      ) {
        falhas.push(`${res.status()} ${res.url()}`);
      }
    });

    await page.goto("/");
    // Rola até o fim para disparar o lazy loading de todas as imagens.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 50));
      }
    });
    await page.waitForLoadState("networkidle");

    expect(falhas, `Imagens quebradas: ${falhas.join(" | ")}`).toHaveLength(0);
  });

  test("nenhum erro de console é emitido ao carregar a página", async ({
    page,
  }) => {
    const erros: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") erros.push(msg.text());
    });
    page.on("pageerror", (err) => erros.push(err.message));

    await page.goto("/");
    await page.waitForLoadState("networkidle");

    expect(erros, `Erros de console: ${erros.join(" | ")}`).toHaveLength(0);
  });

  test("footer exibe horários, endereço e ano corrente", async ({ page }) => {
    await page.goto("/");
    const footer = page.getByRole("contentinfo");
    await expect(footer.getByText(site.hours.weekdays)).toBeVisible();
    await expect(footer.getByText(site.address.line1)).toBeVisible();
    await expect(
      page.getByText(new RegExp(`© ${new Date().getFullYear()} ${site.name}`)),
    ).toBeVisible();
  });
});
