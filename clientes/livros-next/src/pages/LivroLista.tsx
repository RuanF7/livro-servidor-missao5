import React, { useEffect, useState } from "react";
import { Livro } from "../../classes/modelo/Livro";
import LinhaLivro from "../../componentes/LinhaLivro";
import Menu from "../../componentes/Menu";


import styles from "../styles/Home.module.css";

/*
Método GET, Obter e Excluir usando funções assíncronas e carregando
*/

const baseURL = "http://localhost:3000/api/livros";

export default function LivroLista() {
  async function obter() {
    const dados = await fetch(baseURL, {
      method: "GET",
    });

    const retorno: Livro[] = await dados.json();
    setMeusLivros(retorno);
  }

  const [meusLivros, setMeusLivros] = useState<Livro[]>([
    {
      codigo: 1,
      editora: 1,
      titulo: "Inserir dados",
      resumo: "Inserir dados",
      autores: ["Inserir dados"],
    },
  ]);
  const [carregando, setCarregando] = useState<boolean>(false);


  const excluirLivro = async (cod: number) => {
    const baseURL = "http://localhost:3000/api/livros";
    const dados = await fetch(baseURL, {
      method: "DELETE",
      body: JSON.stringify({ codigo_livro: cod }),
    });

    setCarregando(true);
  };

  useEffect(() => {
    obter();
    setCarregando(false);
  }, [carregando]);

  
  /*
  Página de catalogo de livros com botão excluir
  */

  return (
    <React.Fragment>
      <Menu />

      <main className="container">
        <h1>Catalogo de Livros</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Título</th>
              <th scope="col">Resumo</th>
              <th scope="col">Editora</th>
              <th scope="col">Autores</th>
            </tr>
          </thead>
          <tbody>
            {meusLivros.map((livro) => {
              return (
                <LinhaLivro
                  key={livro.codigo}
                  livro={livro}
                  excluir={excluirLivro}
                />
              );
            })}
          </tbody>
        </table>
      </main>
    </React.Fragment>
  );
}