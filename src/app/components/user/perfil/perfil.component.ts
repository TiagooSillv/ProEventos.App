import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from '../../../helpers/validatorField';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

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
  resetForm() : void{
    this.form.reset();
  }


  public validation(): void {

    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmarSenha') 
    };
  
    this.form = this.fb.group(
      {
        nome: ['', [Validators.required, Validators.minLength(3)]],
        funcao: ['', [Validators.required, Validators.minLength(3)]],
        titulo: ['', [Validators.required, Validators.minLength(3)]],
        descricao: ['', [Validators.required, Validators.minLength(3)]],
        telefone: ['', [Validators.required, Validators.minLength(9)]],
        email: ['', [Validators.required, Validators.email]],
        sobreNome: ['', [Validators.required]],
        nomeUsuario: ['', [Validators.required]],
        senha: ['', [Validators.required]],
        confirmarSenha: ['', [Validators.required]],
      },
      formOptions
    );
  }

}
 