import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from '../../../helpers/validatorField';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  form: FormGroup;
  
  get f() : any{ 
    return this.form.controls;
  }

  constructor(private fb : FormBuilder){
    this.form = this.fb.group({})
  }
  ngOnInit() : void{
    this.validation();
  }

  public validation(): void {
    // Aplicando o validador no nível do FormGroup
    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmarSenha') // Certifique-se de usar 'confirmarSenha'
    };
  
    this.form = this.fb.group(
      {
        nome: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        sobreNome: ['', [Validators.required]],
        nomeUsuario: ['', [Validators.required]],
        senha: ['', [Validators.required]],
        confirmarSenha: ['', [Validators.required]], // Corrigido para 'confirmarSenha'
      },
      formOptions
    );
  }

}
