import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatoComponent } from './components/contato/contato.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { HomeComponent } from './components/home/home.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { TrabalheConoscoComponent } from './components/trabalhe-conosco/trabalhe-conosco.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'estoque', component: EstoqueComponent},
  { path: 'noticias', component: NoticiasComponent},
  { path: 'trabalhe_conosco', component: TrabalheConoscoComponent},
  { path: 'contato', component: ContatoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
