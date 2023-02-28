
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ServiciosComponent } from './Componentes/servicios/servicios.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { IniciarSesionComponent } from './Componentes/iniciar-sesion/iniciar-sesion.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './Componentes/footer/footer.component';
import { RegistrarseComponent } from './Componentes/registrarse/registrarse.component';
import { NgwWowModule } from 'ngx-wow';

const appRoutes: Routes=[
  {path:'home', component: InicioComponent},
  { path:'servicios', loadChildren:() => import('src/app/modulo-servicios/modulo-servicios.module').then(m => m.ModuloServiciosModule) },
  { path:'**', pathMatch:'full', redirectTo:'home'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ServiciosComponent,
    ContactoComponent,
    IniciarSesionComponent,
    FooterComponent,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule,
    NgwWowModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }