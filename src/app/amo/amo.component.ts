import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AmoService } from '../services/amo.service';
import { HttpClient } from '@angular/common/http';
import { Amo } from '../interfases/amo';

@Component({
  selector: 'app-amo',
  templateUrl: './amo.component.html',
  styleUrls: ['./amo.component.css']
})
export class AmoComponent implements OnInit {

  myFormulario!:FormGroup;

  amoVector:Array<Amo> = [];

  data: any;

  constructor(private readonly fb: FormBuilder, private serviceAmo:AmoService, private http:HttpClient) { }

  ngOnInit(): void {

  this.myFormulario =this.fb.group({
    idamo:['',[Validators.required]],
    tipoid:['',[Validators.required]],
    nombre:['',[Validators.required]],
    telefono:['',[Validators.required]],
    ciudad:['',[Validators.required]],
    direccion:['',[Validators.required]]
  });

  let arrayAmo:Array<Amo>=[];
  this.serviceAmo.getall().subscribe(datos =>{
    this.amoVector = datos.data;
  })



  }

  actualizar(form:FormGroup){
    this.serviceAmo.update(form.value)
    .subscribe(data =>{
      alert("Se  actualizo con exito")
      this.refresh();
    });
  }

  refresh(){
    let arrayAmo:Array<Amo> = [];
    this.serviceAmo.getall().subscribe(datos =>{
      this.amoVector = datos.data;
    })
  }


  guardar(form: FormGroup){
  this.serviceAmo.create(form.value)
      .subscribe(dato =>{
        alert("Se guardo con exito");
        this.myFormulario.reset();
        this.refresh();
      });

    }

  // guardar(form: FormGroup){
  //   if(this.myFormulario.valid){
  //     if(form.value.idamo && form.value.nombre && form.value.tipoid !== 0){
  //       this.actualizar(form);
  //       return;
  //     }
  //     this.serviceAmo.create(form.value)
  //     .subscribe(dato =>{
  //       alert("Se guardo con exito");
  //       this.myFormulario.reset();
  //       this.refresh();
  //     })
  //   }else{
  //     alert("Formulario Invalido")
  //   }

  // }

  editar(datos: { idamo: any; tipoid: any; nombre: any; telefono: any; ciudad: any; direccion: any }) {
    this.myFormulario.setValue({
      idamo: datos.idamo,
      tipoid: datos.tipoid,
      nombre: datos.nombre,
      telefono: datos.telefono,
      ciudad: datos.ciudad,
      direccion: datos.direccion,
    })

  };






}
