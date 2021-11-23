import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  marca!: string;
  modelo!: string;
  versao!: string;
  ano!: number;
  km!: number;
  preco!: number;


  constructor() { }

  ngOnInit(): void {
  }

  salvarCarro():void {
    console.log('marca: ',this.marca);
    console.log('modelo: ',this.modelo);
    console.log('versao: ',this.versao);
    console.log('ano: ',this.ano);
    console.log('km: ',this.km);
    console.log('preco: ',this.preco);
    alert('Salvo com Sucesso!')
  }

}
