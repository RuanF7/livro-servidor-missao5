import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

/*Navegação entre as páginas */

const routes: Routes = [
  { path: 'lista', component: LivroListaComponent},
  { path: 'dados', component: LivroDadosComponent},
  { path: '', component: LivroDadosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
