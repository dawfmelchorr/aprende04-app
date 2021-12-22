export interface Articulo {
  id: number,
  ref: string;
  descripcion: string;
  precio:number;
  iva?:number;
  stocks?:number;
}
