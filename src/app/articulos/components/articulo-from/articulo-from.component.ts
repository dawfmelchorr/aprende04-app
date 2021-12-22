import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-articulo-from',
  templateUrl: './articulo-from.component.html',
  styleUrls: ['./articulo-from.component.css']
})
export class ArticuloFromComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private articulosService: ArticulosService, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      ref: ['', [Validators.required, Validators.minLength(4),
      Validators.maxLength(4)]],
      descripcion: '',
      precio: ['', [Validators.required, Validators.min(0)]],
      iva: 0,
      stocks: 0
    });
  }

  ngOnInit(): void {
  }

  inicializaForm(): void {
    this.formGroup = this.formBuilder.group({
      ref: '',
      descripcion: '',
      precio: '',
      iva: 0,
      stocks: 0
    });
  }
  add() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.articulosService.add(this.formGroup.value)
    this.inicializaForm();
  }
//Reciclable para otros proyectos
  validado(campo: string) {
    return this.formGroup.controls[campo].errors
      && this.formGroup.controls[campo].touched;
  }
}
