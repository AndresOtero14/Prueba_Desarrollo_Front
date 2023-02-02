import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmoComponent } from './amo/amo.component';
import { AppComponent } from './app.component';
import { EspecieComponent } from './especie/especie.component';
import { LoginComponent } from './login/login.component';
import { PacienteComponent } from './paciente/paciente.component';
import { RazaComponent } from './raza/raza.component';



const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  {path: 'login', component: LoginComponent},
  {path: 'paciente', component: PacienteComponent},
  { path: 'amo', component: AmoComponent},
  {path: 'raza', component:RazaComponent},
  {path: 'especie', component:EspecieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
