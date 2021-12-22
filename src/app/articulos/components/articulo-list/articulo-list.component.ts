import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.css']
})
export class ArticuloListComponent implements OnInit {

  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
  }
  get articulos() {
    return this.articulosService.articulos
  }

  borrarFila(id: number) {
    this.articulosService.borrarFila(id);
  }
}

