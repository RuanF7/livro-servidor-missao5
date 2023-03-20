import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Editora } from './Editora';

/*Controle de editoras com recebimento de string pelo nome e tratamento do number para o código */
@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  obterEditoras() {
    throw new Error('Method not implemented.');
  }

  editoras: Editora[] = [
    {     
      codEditora: 1,
      nome: 'Rocco'
    },
    {      
      codEditora: 2,
      nome: 'HarperCollins'
    },
    {
      codEditora: 3,
      nome:'Intrínseca'
    }
  ];
  getNomeEditora(codigoEditora: number) {
    return this.editoras.filter((editoras) => { return editoras.codEditora === codigoEditora });
  }

  getEditoras(): Observable<Editora[]> {
    return of(this.editoras);
  }

  constructor() { }
}
