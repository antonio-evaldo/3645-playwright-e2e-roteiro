import test, { expect } from "@playwright/test";

test.describe("Página inicial", () => {
  test("Deve visitar a página inicial", async ({ page }) => {
    await page.goto("http://localhost:4200/"); // ação
    await expect(page).toHaveTitle("Jornada Milhas"); // asserção

    const tituloPassagens = page.getByRole("heading", { name: "Passagens" });
    await expect(tituloPassagens).toBeVisible();
  });
});
