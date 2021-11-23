import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  listaCarros: any[] = [
    {
      id: 1,
      marca: 'Fiat',
      modelo: 'Punto',
      versao: 'Attractive',
      ano: 2011,
      km: 48.0,
      preco: 35000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
