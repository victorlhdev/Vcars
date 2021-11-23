import { ICarro } from './ICarro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  private URL: string = 'http://localhost:3000/carros';

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<ICarro[]> {
    return this.http.get<ICarro[]>(this.URL);
  }
}
