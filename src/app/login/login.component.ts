import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  email: string;
  password: string;



  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.initFrom();
  }


  onSubmit(): void { };

  initFrom(): FormGroup {
   return this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required, Validators.minLength(8)]
    })
  }

  login() {
    console.log(this.email);
    console.log(this.password);
  }

}
