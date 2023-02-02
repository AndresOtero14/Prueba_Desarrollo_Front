import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Paciente } from '../interfases/paciente';
import { PacienteService } from '../services/paciente.service';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  myformulario!:FormGroup;
  Modal!: boolean;
  filtroPost='';

  pacienteVector:Array<Paciente> = [];

  data: any;



  constructor( private readonly fb: FormBuilder, private servicePaciente: PacienteService, private http: HttpClient) { }

  ngOnInit(): void {

    this.myformulario= this.fb.group({
      idpaciente :[''],
      nombre: [''],
      fechaNapaciente: [''],
      fechaRegistro: [''],
      fk_especie: [''],
      fk_amo: ['']
    });


    this.servicePaciente.getall().subscribe(datos=>{
      this.pacienteVector = datos.data;
    })


  }


  actualizar(form:FormGroup){
    this.servicePaciente.update(form.value)
    .subscribe(data =>{
      alert("Se  actualizo con exito")
      this.refresh();
    });
  }

  refresh(){
    let arrayRaza:Array<Paciente> = [];
    this.servicePaciente.getall().subscribe(datos =>{
      this.pacienteVector = datos.data;
    })
  }


  guardar(form: FormGroup){
    if(this.myformulario.valid){
      if(form.value.idpaciente && form.value.fk_amo !== 0){
        this.actualizar(form);
        return;
      }
      this.servicePaciente.create(form.value)
      .subscribe(dato =>{
        alert("Se guardo con exito");
        this.myformulario.reset();
        this.refresh();
      })
    }else{
      alert("Formulario Invalido")
    }

  }




     editar(datos: {idpaciente: any;nombre:any; fechaNapaciente:any; fechaRegistro:any; fk_especie:any; fk_amo:any}){
        this.myformulario.setValue({
          idpaciente: datos.idpaciente,
          nombre: datos.nombre,
          fechaNapaciente: datos.fechaNapaciente,
           fechaRegistro: datos.fechaRegistro,
          fk_especie: datos.fk_especie,
          fk_amo: datos.fk_amo,
        })

       };

}
