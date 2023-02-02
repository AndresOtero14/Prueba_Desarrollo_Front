import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PacienteComponent } from './paciente/paciente.component';



const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  {path: 'login', component: LoginComponent},
  {path: 'paciente', component: PacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
