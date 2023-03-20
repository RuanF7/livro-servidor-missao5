import React, { useState } from "react";
import { Livro } from "./modelo/Livro";
import { ControleLivro } from "./controle/ControleLivros";
import { useNavigate } from "react-router-dom";
import { ControleEditora } from "./controle/ControleEditora";


type Props = {
  livros: ControleLivro;
};

export default function LivroDados({ livros }: Props) {
  const [titulo, setTitulo] = useState<string>("");
  const [resumo, setResumo] = useState<string>("");
  const [editora, setEditora] = useState<number>(1);
  const [autores, setAutores] = useState<string>("");

/*
 Incluir, cadastrar e navegar entre aspáginas
 */

  const navigate = useNavigate();
  const todasEditoras = new ControleEditora();

  function cadastrarLivro(event: React.FormEvent) {
    event.preventDefault();

    const novoLivro = new Livro(1, editora, titulo, resumo, [autores]);
    livros.incluir(novoLivro);
    navigate("/dados");
  }

 /*
  Formulário de dados dos livros para serem enviados ao catálogo
  */

  return (
    <React.Fragment>
      <main className="container">
        <h1>Dados Livro</h1>
        <form onSubmit={(event) => cadastrarLivro(event)}>
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
              {todasEditoras.getEditoras().map((editora) => {
                return (
                  <option value={editora.codEditora}>{editora.nome}</option>
                );
              })}
            </select>
          </div>

          <div className="form-group mt-2">
            <label htmlFor="autores">Autores (1 por linha)</label>
            <textarea
             id="autores" 
             className="form-control"
              rows={3}
              onChange={(event) => setAutores(event.target.value)}              
              ></textarea>
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Salvar dados
          </button>
        </form>
      </main>
    </React.Fragment>
  );
}