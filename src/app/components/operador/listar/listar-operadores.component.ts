import { Component, OnInit } from '@angular/core';
import { OperadorService } from 'src/app/shared/services/operador/operador.service';

@Component({
  selector: 'app-listar-operadores',
  templateUrl: './listar-operadores.component.html',
  styleUrls: ['./listar-operadores.component.scss']
})
export class ListarOperadoresComponent implements OnInit {

  listaOperadores:any = [];/* FAZER DTO */
  operadorSelecionado:any = {}/* Fazer dto */
  showDialog:boolean = false;

  constructor(private operadorService: OperadorService) { }

  ngOnInit(): void {
    this.getListaOperadores()
  }

  getListaOperadores(){
    this.operadorService.getAll().then((res) => {
      console.log(res)
      this.listaOperadores = res
    }).catch((error: any) => {console.log(error)});
  }

  abrirModal(){ 
    this.operadorSelecionado = {};
    this.showDialog = true;
  }

  atualizarModal(){
    this.getListaOperadores();
    this.showDialog = false;
  }
  
  editar(dado: any){/* dto */
    this.operadorSelecionado = dado;
    this.showDialog = true;
  }

  excluir(dado: any){/* dto */
    this.operadorService.remover(dado.id).then(() => {
      this.getListaOperadores();
    }).catch((error: any) => {console.log(error)});
  }
}
