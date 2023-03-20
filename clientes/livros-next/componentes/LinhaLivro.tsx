import React, { useEffect, useState } from "react";
import { Editora } from "../classes/modelo/Editora";
import { Livro } from "../classes/modelo/Livro";

/*
Props para livro e função excluir
*/
interface LinhaLivroProps {
  livro: Livro;
  excluir: (cod: number) => Promise<void>;
}

/*
Função de inclusão dos livros no catálogo pelo código de editoras e método GET
*/

export default function LinhaLivro({ livro, excluir }: LinhaLivroProps) {
  const [editora, setEditora] = useState<string>("");

  async function consultaEditora() {
    const baseURL = "http://localhost:3000/api/editoras";
    const dados = await fetch(baseURL, {
      method: "GET",
    });

    const controleEditora: Editora[] = await dados.json();
    const retorno = editoras.find(valor => valor.codEditora === livro.codEditora)
    console.log(livro.codEditora)

    setEditora(retorno != undefined ? retorno.nome : "Sem cadastro");
  }

  useEffect(() => {
    consultaEditora();
  },);

/*
Catalogo, con recebimento dos dados e botão excluir
*/
  return (
    <React.Fragment>
      <tr>
        <th scope="row">
          <p>{livro.titulo}</p>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => {
              excluir(livro.codigo);              
            }}
          >
            Excluir
          </button>
        </th>
        <td>{livro.resumo}</td>
        <td>
          {editora}
        </td>
        <td>
          <ul>
            {livro.autores.map((nome) => {
              // eslint-disable-next-line react/jsx-key
              return <li>{nome}</li>;
            })}
          </ul>
        </td>
      </tr>
    </React.Fragment>
  );
  
}
