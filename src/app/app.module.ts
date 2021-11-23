import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './components/contato/contato.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/home/search/search.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { TrabalheConoscoComponent } from './components/trabalhe-conosco/trabalhe-conosco.component';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';
import { PainelModule } from './painel/painel.module';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';


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
  imports: [
    BrowserModule,
    AppRoutingModule,
    PainelModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot(),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
