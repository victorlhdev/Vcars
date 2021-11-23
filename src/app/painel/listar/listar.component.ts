import { Component, OnInit } from '@angular/core';

import { CarrosService } from './../carros.service';
import { ICarro } from './../ICarro.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  listaCarros: ICarro[] = [];

  constructor(private CarrosService: CarrosService) {}

  ngOnInit(): void {
    this.carregarCarros();
  }

  carregarCarros(): void {
    this.CarrosService.buscarTodos().subscribe(retorno =>{
      this.listaCarros = retorno;
    });
  }
}
