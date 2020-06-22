import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPlacehoderComponent } from './main-placehoder/main-placehoder.component';


const routes: Routes = [
  {
    path: '',
    component: MainPlacehoderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
