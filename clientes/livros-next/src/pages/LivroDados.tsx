import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Menu from "../../componentes/Menu";

import { Editora } from "../../classes/modelo/Editora";
import { redirect } from "next/dist/server/api-utils";

/*
Método Router, GET, POST, usando funções assíncronas e baseURL com JSON de editoras e livros cadastrados
*/

const LivroDados: NextPage = () => {
  const router = useRouter();
  const [titulo, setTitulo] = useState<string>("");
  const [resumo, setResumo] = useState<string>("");
  const [editora, setEditora] = useState<number>(1);
  const [autores, setAutores] = useState<string>("");

  const [carregando, setCarregando] = useState<boolean>(true);
  const [todasEditoras, setTodasEditoras] = useState<Editora[]>([
    { codEditora: 1, nome: "Sem cadastro" },
  ]);

  async function editoras() {
    const baseURL = "http://localhost:3000/api/editoras";
    const dados = await fetch(baseURL, {
      method: "GET",
    });

    const retorno: Editora[] = await dados.json();
    setTodasEditoras(retorno);
  }

  async function cadastrarLivro(event: React.FormEvent) {
    event.preventDefault();

    const baseURL = "http://localhost:3000/api/livros";
    const novoLivro = {
      livro: {
        codigo: 1,
        editora: editora,
        titulo: titulo,
        resumo: resumo,
        autores: [autores],
      },
    };

    const dados = await fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(novoLivro),
    });

    const retorno = await dados.json();

    if (retorno.length > 0) {
      router.push("/LivroLista");
    }
  }

  useEffect(() => {
    carregando && editoras();
    setCarregando(false);
  }, [carregando]);

  /*
  Formulário de dados dos livros para serem enviados ao catálogo
  */

  return (
    <React.Fragment>
      <Menu />
      <main className="container">
        <h1>Dados Livro</h1>
        <form
          onSubmit={(event) => {
            cadastrarLivro(event);
          }}
        >
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input
              id="titulo"
              type="text"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
              className="form-control"
              placeholder="Titulo do livro"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="resumo">Resumo</label>
            <textarea
              id="resumo"
              value={resumo}
              onChange={(event) => setResumo(event.target.value)}
              className="form-control"
              rows={3}
            ></textarea>
          </div>

          <div className="form-group mt-2">
            <label htmlFor="editora">Editora</label>
            <select
              id="editora"
              value={editora}
              onChange={(event) => {
                setEditora(Number(event.target.value));
              }}
              className="form-control"
            >
              {todasEditoras.map((editora) => {
                return (
                  <option key={editora.codEditora} value={editora.codEditora}>
                    {editora.nome}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group mt-2">
            <label htmlFor="autores">Autores (1 por linha)</label>
            <textarea
              id="autores"
              className="form-control"
              value={autores}
              onChange={(event) => {
                setAutores(event.target.value);
              }}
              rows={3}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Salvar dados
          </button>
        </form>
      </main>
    </React.Fragment>
  );
};
export default LivroDados;