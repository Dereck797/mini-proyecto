import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    email:    ['john@mail.com', [ Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,3}") ]],
    password: ['changeme', [ Validators.required, Validators.minLength(6) ]],
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  campoValido(campo:string){
    return this.miFormulario.controls[campo]?.errors && this.miFormulario.controls[campo]?.touched;
  }

  login() {
    const { email, password } = this.miFormulario.value;
  }

}
