import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Especie } from '../interfases/especie';
import { EspecieService } from '../services/especie.service';

@Component({
  selector: 'app-especie',
  templateUrl: './especie.component.html',
  styleUrls: ['./especie.component.css']
})
export class EspecieComponent implements OnInit {

  myformular!: FormGroup;
  especieVector: Array<Especie> = [];
  data: any;

  constructor(private readonly fb: FormBuilder, private serviceEspecie: EspecieService, private http: HttpClient) { }

  ngOnInit(): void {

    this.myformular = this.fb.group({
      idespecie: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      fk_raza: ['', [Validators.required]]

    });

    let arrayEspecie: Array<Especie> = [];
    this.serviceEspecie.getall().subscribe(datos => {
      this.especieVector = datos.data;
    })

  }


  actualizar(form: FormGroup) {
    this.serviceEspecie.update(form.value)
      .subscribe(data => {
        alert("Se  actualizo con exito")
        this.refresh();
      });
  }

  refresh() {
    let arrayRaza: Array<Especie> = [];
    this.serviceEspecie.getall().subscribe(datos => {
      this.especieVector = datos.data;
    })
  }

  guardar(form: FormGroup) {
    this.serviceEspecie.create(form.value)
      .subscribe(dato => {
        alert("Se guardo con exito");
        this.myformular.reset();
        this.refresh();
      });

  }

  // guardar(form: FormGroup) {
  //   if (this.myformular.valid) {
  //     if (form.value.idespecie && form.value.nombre && form.value.fk_raza !== 0) {
  //       this.actualizar(form);
  //       return;
  //     }
  //     this.serviceEspecie.create(form.value)
  //       .subscribe(dato => {
  //         alert("Se guardo con exito");
  //         this.myformular.reset();
  //         this.refresh();
  //       })
  //   } else {
  //     alert("Formulario Invalido")
  //   }


  // }

  editar(datos: {idespecie: any; nombre:any; fk_raza:any}){
    this.myformular.setValue({
        idespecie: datos.idespecie,
       nombre: datos.nombre,
       fk_raza: datos.fk_raza,
       })

     };

}
