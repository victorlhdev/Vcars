import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel.component';
import { PainelheaderComponent } from './painelheader/painelheader.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    ListarComponent,
    CadastrarComponent,
    PainelheaderComponent,
    PainelComponent,
  ],
  imports: [CommonModule, PainelRoutingModule, FormsModule, HttpClientModule],
})
export class PainelModule {}
