import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PacienteComponent } from './paciente/paciente.component';
import { HttpClientModule } from '@angular/common/http';
import { AmoComponent } from './amo/amo.component';
import { EspecieComponent } from './especie/especie.component';
import { RazaComponent } from './raza/raza.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PacienteComponent,
    AmoComponent,
    EspecieComponent,
    RazaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
