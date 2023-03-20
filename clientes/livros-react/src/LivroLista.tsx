import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";
import { Livro } from "./modelo/Livro";
import { useEffect, useState } from "react";

type LinhaLivroProps = {
  livro: Livro;
  prateleira: ControleLivro;
  carregar: React.Dispatch<React.SetStateAction<boolean>>;

};

type Props = {
  livros: ControleLivro;
};


const LinhaLivro = ({ livro, prateleira, carregar }: LinhaLivroProps) => {
  const editoras = new ControleEditora();

/*
  Página de catalogo de livros com botão excluir
*/

  return (
    <>
      <tr>
        <th>
          <p>{livro.titulo}</p>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => {
              prateleira.excluir(livro.codigo);
              carregar(true);
            }}
          >
            Excluir
          </button>
        </th>
        <td>{livro.resumo}</td>
        <td>
          {editoras.getNomeEditora(livro.codEditora).map((nomeEditora) => {
            return nomeEditora.nome;
          })}
        </td>
        <td>
          <ul>
            {livro.autores.map((nome) => {
              return <li>{nome}</li>;
            })}
          </ul>
        </td>
      </tr>
    </>
  );
};

export default function LivroLista({ livros }: Props) {
  const [livrosArmazenados, setLivrosArmazenados] = useState<Livro[]>(livros.obterLivros());
  const [carregar, setCarregar] = useState<boolean>(false);

  useEffect(() => {
    setLivrosArmazenados(livros.obterLivros());
    setCarregar(false);
  }, [carregar, livros]);
  
  return (
    <main className="container">
      <h1>Catálogo de Livros</h1>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th> Título</th>
            <th> Resumo</th>
            <th> Editora</th>
            <th> Autores</th>
          </tr>
        </thead>
        <tbody>
          {livrosArmazenados.map((livro, index) => {
            return (<LinhaLivro key={index} livro={livro} prateleira={livros} carregar={setCarregar} />
            );
          })}
        </tbody>
      </table>
    </main>
  );
}