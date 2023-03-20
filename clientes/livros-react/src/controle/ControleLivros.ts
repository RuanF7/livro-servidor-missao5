import { Livro } from '../modelo/Livro';

const baseUrl = "http://localhost:3030/api/livro";


export class ControleLivro {
  async obterLivros() {
    const dados = await fetch(baseUrl, {
      method: "GET",
    });

    return await dados.json();
  }

  async incluir(receberLivro: Livro) {
    const novoLivro = {
      codEditora: receberLivro.codEditora,
      titulo: receberLivro.titulo,
      resumo: receberLivro.resumo,
      autores: receberLivro.autores,
    };

    console.log(novoLivro);

    const dados = await fetch(baseUrl, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoLivro),
    });

    console.log(dados);

    const retorno = await dados.json();

    if (retorno.length > 0) {
      console.log("📚 Livro cadastrado com sucesso! 📖");
    }
  }

  async excluir(codLivro: number) {
    const dados = await fetch(`${baseUrl}/${codLivro} `, {
      method: "DELETE",
    });

    return await dados.json();
  }
}
