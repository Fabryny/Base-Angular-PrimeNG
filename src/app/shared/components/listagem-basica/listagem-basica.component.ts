import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listagem-basica',
  templateUrl: './listagem-basica.component.html',
  styleUrls: ['./listagem-basica.component.scss']
})
export class ListagemBasicaComponent implements OnInit {

  @Input() listaRecebida?: any = [];
  @Input() tipoLista?: any = '';

  @Output() cadastrar = new EventEmitter();
  @Output() atualizar = new EventEmitter();
  @Output() remover = new EventEmitter();

  showDialog: boolean = false;
  tituloModal: string = '';

  programaSelecionado: any = {}/* Fazer dto */

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  abrirModal(){
    this.programaSelecionado = {};
    this.showDialog = true;
  }

  salvarPayload(payload: any){
    this.showDialog = false;
    this.cadastrar.emit(payload);  
    this.programaSelecionado = {};
  }

  atualizarPayload(payload: any){
    this.showDialog = false;
    this.atualizar.emit(payload);  
    this.programaSelecionado = {};
  }

  editar(dado: any){/* dto */
    this.programaSelecionado = dado;
    this.showDialog = true;
  }

  excluir(dado: any){/* dto */
    this.remover.emit(dado.id); 
  }


}
