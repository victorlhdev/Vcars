import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './components/contato/contato.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { HomeComponent } from './components/home/home.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { TrabalheConoscoComponent } from './components/trabalhe-conosco/trabalhe-conosco.component';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';
import { PainelModule } from './painel/painel.module';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { SearchComponent } from './components/home/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    EstoqueComponent,
    NoticiasComponent,
    TrabalheConoscoComponent,
    ContatoComponent,
    LoginComponent,
    CarouselComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PainelModule, FormsModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
