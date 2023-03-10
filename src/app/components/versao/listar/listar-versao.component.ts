import { Component, OnInit } from '@angular/core';
import { VersaoService } from 'src/app/shared/services/versao/versao.service';

@Component({
  selector: 'app-listar-versao',
  templateUrl: './listar-versao.component.html',
  styleUrls: ['./listar-versao.component.scss']
})
export class ListarVersaoComponent implements OnInit {
  listaVersoes: any = [];

  constructor(private versaoService: VersaoService) { }

  ngOnInit(): void {
    this.getListaVersoes();
  }

  getListaVersoes(){
    this.versaoService.getAll().then((res: any) => {
      console.log(res)
      this.listaVersoes = res
    }).catch((error: any) => {console.log(error)});
  }

  salvar(payload: any){
    this.versaoService.salvar(payload).then(() => {
      console.log('vihu', payload)
      this.getListaVersoes();
    }).catch((error: any) => {console.log(error)});
  }
  
  atualizar(payload: any){
    this.versaoService.atualizar(payload).then(() => {
      console.log('vihu', payload)
      this.getListaVersoes();
    }).catch((error: any) => {console.log(error)});
  }

  remover(id: any){
    this.versaoService.remover(id).then(() => {
      this.getListaVersoes();
    }).catch((error: any) => {console.log(error)});
  }
}
