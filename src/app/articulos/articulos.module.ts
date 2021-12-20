import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosPageListComponent } from './pages/articulos-page-list/articulos-page-list.component';
import { ArticulosPageAddComponent } from './pages/articulos-page-add/articulos-page-add.component';
import { ArticuloListComponent } from './components/articulo-list/articulo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticuloFromComponent } from './components/articulo-from/articulo-from.component';



@NgModule({
  declarations: [
    ArticulosPageListComponent,
    ArticulosPageAddComponent,
    ArticuloListComponent,
    ArticuloFromComponent,

  ],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class ArticulosModule { }
