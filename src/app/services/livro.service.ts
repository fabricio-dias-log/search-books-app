import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { LivrosResultado } from '../models/livrosResultado.interface';
import { Item } from '../models/item.interface';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private readonly API = "https://www.googleapis.com/books/v1/volumes";

  constructor(private http: HttpClient) { }

  buscarLivros(campoBusca: string): Observable<LivrosResultado> {
    const params = new HttpParams().append('q', campoBusca);
    return this.http.get<LivrosResultado>(this.API, {params});
  }
}
