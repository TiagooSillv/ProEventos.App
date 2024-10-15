
import { Component } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../model/Evento';
import { ToastrService } from 'ngx-toastr';

import {Modal} from 'bootstrap'
import { NgxSpinnerService } from 'ngx-spinner';




@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {


  public eventos : Evento[] = [];
  public eventosFiltrados : Evento[] = [];
  

  public larguraImagem  : number = 150;
  public margemImagem  : number = 2;
  public exibirImagem : boolean = true;
  private _filtroListado : string = '';

  public get filtroLista(){
    return this._filtroListado;
  }
  public set filtroLista(value : string){
    this._filtroListado = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;

    
  }

  public filtrarEventos (filtrarPor : string) : Evento[] { 
    filtrarPor = filtrarPor.toLowerCase();
    return this.eventos.filter(
      (evento : Evento) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1 


    )
  }

  public alterarImagem(){
    this.exibirImagem = !this.exibirImagem;
  }

  constructor(
    
    private spinner: NgxSpinnerService,
    private evento : EventoService,
    private toastr : ToastrService 

  ){}

  modalInstance: any;


  
  ngOnInit(): void {
    this.getEventos();
    const modalElement = document.getElementById('exampleModal');
    
  }
  
  openModal() {
    this.modalInstance.show();
  }

  closeModal() {
    this.modalInstance.hide();
  }

  confirModalYes(){
    this.modalInstance.hide();
    this.toastr.success('Evento deletado com sucesso!!!')
  }
  confirModalNo(){
    this.modalInstance.hide();
  }
  
  
  public getEventos(): void{

    this.evento.getEvento().subscribe({
      next : (eventosResp : Evento[]) => {
        this.eventos = eventosResp,
        this.eventosFiltrados = this.eventos
      },
      error : (error : any) => {
        this.spinner.hide();
        this.toastr.error('Erro ao carregar os Eventos','Error!')

      },
      complete : () => this.spinner.hide() 
      
      
      

    });
    

  }

}
