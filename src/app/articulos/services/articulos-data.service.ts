import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Articulo } from '../interfaces/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosDataService {
  private urlEndPoint: string = 'http://localhost:8080/api/articulos';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }
  getAll(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(`${this.urlEndPoint}/list`).pipe(
      map(response => response as Articulo[])
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/delete?id=${id}`).pipe(
      map(response => response as any)
    );
  }
  public post(articulo: Articulo): Observable<any> {
    return this.http.post<any>(`${this.urlEndPoint}/add`, articulo,
      { headers: this.httpHeaders });
  }
}

