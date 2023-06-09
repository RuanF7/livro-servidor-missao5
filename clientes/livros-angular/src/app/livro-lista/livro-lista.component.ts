import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../Editora';
import { Livro } from '../Livro';

/*Componente de criação do catálogo com botão de remover */

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent {
  public editoras: Array<Editora> = [];  

  public livros: Array<Livro> = [];   


  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService,private router: Router) {}
  
  ngOnInit(): void {

    this.servEditora.getEditoras().subscribe((editoras) => {
      this.editoras = editoras
    }
    )

    this.servLivros.obterLivros().subscribe((livros)=>{
      this.livros = livros;
    })
  }

  excluir = (codigo: number) => {
    this.servLivros.remove(codigo);
    this.servLivros.obterLivros().subscribe((livros)=>{
      this.livros = livros;
  })}

  obterNome = (codEditora: number) => {
    return this.servEditora.getNomeEditora(codEditora).map((editoraNome) => {
      return editoraNome.nome;
    })};

  }