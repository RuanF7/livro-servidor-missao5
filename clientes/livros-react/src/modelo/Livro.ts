/*
Modelo de livros, com tipos number para codigo e editora, e string para resumo, titulo e autores, sendo autores um array
*/
export class Livro {
  
  codigo: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(
    codigo: number,
    codEditora: number,
    titulo: string,
    resumo: string,
    autores: string[]


  ) {
    this.codigo = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;

  }
}
