import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../interfaces/articulo';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-articulo-from',
  templateUrl: './articulo-from.component.html',
  styleUrls: ['./articulo-from.component.css']
})
export class ArticuloFromComponent implements OnInit {
  articulo: Articulo = {ref:'', descripcion:'', precio:0, iva:21, stocks:0}

  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
  }
  add(){
    this.articulosService.add(this.articulo)
    this.articulo= {ref:'', descripcion:'', precio:0, iva:0, stocks:0};
}
}
