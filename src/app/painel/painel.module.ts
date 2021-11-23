import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';

import { AtualizarComponent } from './atualizar/atualizar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel.component';
import { PainelheaderComponent } from './painelheader/painelheader.component';

@NgModule({
  declarations: [
    ListarComponent,
    CadastrarComponent,
    PainelheaderComponent,
    PainelComponent,
    AtualizarComponent,
  ],
  imports: [
    CommonModule,
    PainelRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot(),
  ],
})
export class PainelModule {}
