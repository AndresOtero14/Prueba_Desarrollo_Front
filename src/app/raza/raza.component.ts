import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Raza } from '../interfases/raza';
import { RazaService } from '../services/raza.service';

@Component({
  selector: 'app-raza',
  templateUrl: './raza.component.html',
  styleUrls: ['./raza.component.css']
})

export class RazaComponent implements OnInit {
  loginForm!: FormGroup;
  myformulario!:FormGroup;
  razaVector:Array<Raza> = [];
  data: any;

  constructor(private readonly fb: FormBuilder,private serviceRaza: RazaService, private http: HttpClient ) { }

  ngOnInit(): void {

    this.myformulario= this.fb.group({
      idraza:['' ,[Validators.required]],
      nombre:['',[Validators.required]]
    });

    let arrayRaza:Array<Raza> = [];
    this.serviceRaza.getall().subscribe(datos =>{
      this.razaVector = datos.data;
    })
  }

  actualizar(form:FormGroup){
    this.serviceRaza.update(form.value)
    .subscribe(datos =>{
      alert("Se  actualizo con exito");
      this.refresh();

    });
  }

  refresh(){
    let arrayRaza:Array<Raza> = [];
    this.serviceRaza.getall().subscribe(datos =>{
      this.razaVector = datos.data;
    })
  }

  guardar(form: FormGroup){
    this.serviceRaza.create(form.value)
      .subscribe(datos =>{
        alert("Se guardo con exito");
        this.myformulario.reset();
        this.refresh();
      });
  }


  // guardar(form: FormGroup){
  //   if(this.myformulario.valid){
  //     if(form.value.idraza && form.value.nombre !== 0){
  //       this.actualizar(form);
  //       return;
  //     }
  //     this.serviceRaza.create(form.value)
  //     .subscribe(datos =>{
  //       alert("Se guardo con exito");
  //       this.myformulario.reset();
  //       this.refresh();
  //     })
  //   }else{
  //     alert("Formulario Invalido")
  //   }

  // }


editar(datos: {idraza: any; nombre:any}){
     this.myformulario.setValue({
       idraza: datos.idraza,
       nombre: datos.nombre,
     })

  };




/*
  initFrom(): FormGroup {
    return this.fb.group({
       id: ['', [ Validators.required]],
       nombre: ['', Validators.required, Validators.minLength(8)]
     })
   }*/

}
