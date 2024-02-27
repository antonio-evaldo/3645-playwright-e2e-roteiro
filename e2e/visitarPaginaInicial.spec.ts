import test, { expect } from "@playwright/test";

test.describe("Página inicial", () => {
  test("Deve visitar a página inicial", async ({ page }) => {
    await page.goto("/"); // ação
    await expect(page).toHaveTitle("Jornada Milhas"); // asserção

    // const tituloPassagens = page.getByRole("heading", { name: "Passagens" });
    // await expect(tituloPassagens).toBeVisible();

    const tituloPassagens = page.getByTestId('titulo-passagens');
    const tituloPromocoes = page.getByTestId('titulo-promocoes');
    const tituloDepoimentos = page.getByTestId('titulo-depoimentos');

    await expect(tituloPassagens).toHaveText('Passagens');
    await expect(tituloPromocoes).toHaveText('Promoções');
    await expect(tituloDepoimentos).toHaveText('Depoimentos');
  });
});
