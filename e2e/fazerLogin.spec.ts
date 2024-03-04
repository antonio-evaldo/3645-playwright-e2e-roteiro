import { test } from "./page-objects/PaginaLogin";

test.describe('Página de Login', () => {
  test('Deve conseguir fazer login com email e senha válidos', async ({ paginaLogin }) => {
    await paginaLogin.visitar();
    await paginaLogin.fazerLogin('antonio.evaldo@alura.com', '123456');
    await paginaLogin.loginFeitoComSucesso();
  });

  test('Não deve conseguir fazer login com um campo incorreto', async ({ paginaLogin }) => {
    await paginaLogin.visitar();
    await paginaLogin.fazerLogin('antonio.errado@alura.com', '123456');
    await paginaLogin.estaMostrandoMensagemDeErro('Você não está autorizado a acessar este recurso');
  });
});
