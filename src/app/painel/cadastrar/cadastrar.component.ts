import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CarrosService } from './../carros.service';
import { ICarro } from './../ICarro.model';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent implements OnInit {
  carro: ICarro = {
    marca: null!,
    modelo: null!,
    versao: null!,
    ano: null!,
    km: null!,
    preco: null!,
  }

  constructor(private CarrosService: CarrosService, private Router: Router) {}

  ngOnInit(): void {}

  salvarCarro(): void {
    this.CarrosService.cadastrar(this.carro).subscribe(retorno => {
      this.carro = retorno;
      this.CarrosService.exibirMensagem(
        'SISTEMA',
        `${this.carro.modelo} foi cadastrado com sucesso. ID: ${this.carro.id}`,
        'toast-success'
      );
      this.Router.navigate(['/painel/listar'])
    });
  }
}
