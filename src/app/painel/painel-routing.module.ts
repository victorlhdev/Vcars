import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtualizarComponent } from './atualizar/atualizar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { PainelComponent } from './painel.component';

const routes: Routes = [
  {
    path: 'painel',
    component: PainelComponent,
    children: [
      { path: 'listar', component: ListarComponent },
      { path: 'cadastrar', component: CadastrarComponent },
      { path: 'atualizar/:id', component: AtualizarComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PainelRoutingModule {}
