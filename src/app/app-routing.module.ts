import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { GridComponent } from './grid/grid.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'list-view', component: ListComponent },
  { path: 'grid-view', component: GridComponent },
  { path: 'detail-view', component: DetailComponent },
  { path: '',   redirectTo: '/list-view', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
