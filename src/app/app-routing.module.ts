import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainInformationComponent } from './pages/main-information/main-information.component';
import { SeguroProfesionalComponent } from './pages/seguro-profesional/seguro-profesional.component';


const routes: Routes = [
  {path: '', component: MainInformationComponent},
  {path: 'seguro-profesional', component: SeguroProfesionalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
