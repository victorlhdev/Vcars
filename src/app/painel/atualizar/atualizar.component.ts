import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CarrosService } from './../carros.service';
import { ICarro } from './../ICarro.model';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.scss']
})
export class AtualizarComponent implements OnInit {

  carro: ICarro = {
    marca: null!,
    modelo: null!,
    versao: null!,
    ano: null!,
    km: null!,
    preco: null!,
  }

  constructor(
    private CarrosServicece: CarrosService,
    private Router: Router,
    private activateRouter: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.activateRouter.snapshot.paramMap.get('id'));
    this.CarrosServicece.buscarPorId(id).subscribe(retorno => {
      this.carro = retorno;
    });
  }

  salvarCarro(): void {
    this.CarrosServicece.atualizar(this.carro).subscribe(retorno => {
      this.carro = retorno;
      this.CarrosServicece.exibirMensagem(
        'SISTEMA',
        `${this.carro.marca} ${this.carro.modelo} foi atualizado com sucesso.`,
        'toast-success'
      );
      this.Router.navigate(['/painel/listar']);
    });
  }

}
