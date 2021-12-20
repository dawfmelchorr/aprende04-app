import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosPageAddComponent } from './pages/articulos-page-add/articulos-page-add.component';
import { ArticulosPageListComponent } from './pages/articulos-page-list/articulos-page-list.component';

const routes: Routes = [
{path: '',
children:[
  {path: 'add', component: ArticulosPageAddComponent},
  {path: 'list', component: ArticulosPageListComponent},
  {path:'**', redirectTo: ''},
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticulosRoutingModule { }
