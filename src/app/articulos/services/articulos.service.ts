import { Injectable } from '@angular/core';
import { Articulo } from '../interfaces/articulo';
import { ArticulosDataService } from './articulos-data.service';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private _articulos: Articulo[] = [];

  constructor(private dataService: ArticulosDataService) {
    this.load()
  }
  load() {
    this.dataService.getAll().subscribe(articulos => this._articulos = articulos);
  }

  get articulos(): Articulo[] {
    return [...this._articulos];
  }

  add(articulo: Articulo) {
    this.dataService.post(articulo).subscribe({
      next: data => {
        console.log(JSON.stringify(data));
        this._articulos.push(data)
      },
      error: error => {
        console.error('Se ha producido un error en la comunicacion con el servidor!: ', error);
      }
    });
  }

  borrarFila(id: number) {
    this.dataService.delete(id).subscribe(articulo => {
      this.load()
    });
  }
}
