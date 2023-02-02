import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  myformulario!:FormGroup;
  Modal!: boolean;
  filtroPost='';
  constructor() { }

  ngOnInit(): void {
  }




}
