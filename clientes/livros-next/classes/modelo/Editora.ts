
/*
Modelo das editoras com o tipo string para o nome e number para o codigo
*/
export class Editora {
  nome: string;
  codEditora: number;

  constructor( nome: string, codEditora: number ) {
    this.nome = nome;
    this.codEditora = codEditora;
  }
}
