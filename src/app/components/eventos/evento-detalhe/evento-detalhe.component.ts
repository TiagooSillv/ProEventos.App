import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent {

  form: FormGroup;

  get f() : any{
    return this.form.controls;
  }

  constructor(private fb : FormBuilder) {

    this.form = this.fb.group({});
  }
  ngOnInit() : void{
    this.validation();
  }

  public validation(): void {
    
    this.form = this.fb.group({
      tema : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30) ]],
      local : ['', [Validators.required]],
      dataEvento : ['',[Validators.required]],
      qtdPessoas : ['', [Validators.required, Validators.max(2000) ]],
      telefone : ['', [Validators.required]],
      email : ['', [Validators.email,Validators.required]],
      imagemURL : ['',[Validators.required]],
      
    });
  }
  resetForm() : void{
    this.form.reset();
  }



}
