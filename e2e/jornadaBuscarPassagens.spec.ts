import test from '@playwright/test';
import PaginaPrincipal from './page-objects/PaginaPrincipal';

test.describe('Buscar Passagens', () => {
  test('Deve buscar passagem de somente ida', async ({ page }) => {
    const paginaPrincipal = new PaginaPrincipal(page);

    await paginaPrincipal.visitar();
    await paginaPrincipal.definirSomenteIda();
    await paginaPrincipal.definirPassageiros(3, 1, 1);
    await paginaPrincipal.definirOrigemEDestino('minas gerais', 'rio de janeiro');

    await paginaPrincipal.definirData(new Date());
    await paginaPrincipal.buscarPassagens();

    await paginaPrincipal.estaMostrandoPassagens('Somente ida', 'Minas Gerais', 'Rio de Janeiro');
  });
});
