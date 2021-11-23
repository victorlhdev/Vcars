import { ICarro } from './ICarro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CarrosService {
  private URL: string = 'http://localhost:3000/carros';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  buscarTodos(): Observable<ICarro[]> {
    return this.http.get<ICarro[]>(this.URL).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibeErro(erro))
    );
  }

  buscarPorId(id: number): Observable<ICarro> {
    return this.http.get<ICarro>(`${this.URL}/${id}`).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibeErro(erro))
    );
  }

  cadastrar(carro: ICarro): Observable<ICarro> {
    return this.http.post<ICarro>(this.URL, carro).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibeErro(erro))
    );
  }

  atualizar(carro: ICarro): Observable<ICarro> {
    return this.http.put<ICarro>(`${this.URL}/${carro.id}`, carro).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibeErro(erro))
    );
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibeErro(erro))
    );
  }

  exibeErro(e: any): Observable<any> {
    this.exibirMensagem(
      'ERRO!',
      'Não foi possivel realizar a operação!',
      'toast-error'
    );
    return EMPTY;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(
      mensagem,
      titulo,
      { closeButton: true, progressBar: true },
      tipo
    );
  }
}
