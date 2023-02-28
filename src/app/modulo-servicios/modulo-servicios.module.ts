import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios/servicios.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes=[
  { path: '', 
    children:[
      {path:'', component: ServiciosComponent},
      {path:'**', redirectTo:''}
    ]}
  
]

@NgModule({
  declarations: [
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class ModuloServiciosModule { }
