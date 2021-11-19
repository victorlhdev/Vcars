import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { PainelRoutingModule } from './painel-routing.module';
import { PainelheaderComponent } from './painelheader/painelheader.component';
import { PainelComponent } from './painel.component';


@NgModule({
  declarations: [
    ListarComponent,
    CadastrarComponent,
    PainelheaderComponent,
    PainelComponent,
  ],
  imports: [
    CommonModule,
    PainelRoutingModule
  ]
})
export class PainelModule { }
