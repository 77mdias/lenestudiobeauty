import { defineConfig, devices } from "@playwright/test";

/**
 * Testes E2E da landing page.
 * Usa a porta 3100 dedicada para não conflitar com um `next dev`
 * eventualmente rodando na 3000.
 * CI: sobe `bun run start` após o build de produção.
 * Local: se algo já responder na 3100, o servidor existente é reutilizado.
 */
const PORT = 3100;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: `PORT=${PORT} bun run start`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
