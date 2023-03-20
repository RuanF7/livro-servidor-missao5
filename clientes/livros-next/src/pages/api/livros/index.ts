import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivro } from "../../../../classes/controle/ControleLivros"; 
import { Livro } from "../../../../classes/modelo/Livro";

/*
Controle para recebimento dos livros, POST, DELETE usando o NextApiRequest e NextApiResponse
*/

export const controleLivros = new ControleLivro(); 
 

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  
  const requestMethod = req.method;


  switch (requestMethod) {
    case "POST":
      const { livro } = JSON.parse(req.body);
      const novoLivro = new Livro(
        livro.codigo,
        livro.editora,
        livro.titulo,
        livro.resumo,
        livro.autores
      );
      controleLivros.incluir(novoLivro);
      res.status(200).json(controleLivros.obterLivros());
      break;

    case "DELETE":
      const { codigo_livro } = JSON.parse(req.body);
      controleLivros.excluir(Number(codigo_livro));
      res.status(200).json(controleLivros.obterLivros());
      break;

    default:
      res.status(200).json(controleLivros.obterLivros());
      break;
  }
};