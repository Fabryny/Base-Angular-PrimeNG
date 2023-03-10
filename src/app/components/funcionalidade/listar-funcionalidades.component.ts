import { Component, OnInit } from '@angular/core';
import { FuncionalidadeService } from 'src/app/shared/services/funcionalidade/funcionalidade.service';

@Component({
  selector: 'app-listar-funcionalidades',
  templateUrl: './listar-funcionalidades.component.html',
  styleUrls: ['./listar-funcionalidades.component.scss']
})
export class ListarFuncionalidadesComponent implements OnInit {
  listaFuncionalidades: any = [];

  constructor(private funcionalidadeService: FuncionalidadeService) { }

  ngOnInit(): void {
    this.getListaFuncionalidades();
  }

  getListaFuncionalidades(){
    this.funcionalidadeService.getAll().then((res: any) => {
      console.log('aimds',res)
      this.listaFuncionalidades = res
    }).catch((error: any) => {console.log(error)});
  }

  salvar(payload: any){
    this.funcionalidadeService.salvar(payload).then(() => {
      console.log('vihu', payload)
      this.getListaFuncionalidades();
    }).catch((error: any) => {console.log(error)});
  }

  atualizar(payload: any){
    this.funcionalidadeService.atualizar(payload).then(() => {
      console.log('vihu', payload)
      this.getListaFuncionalidades();
    }).catch((error: any) => {console.log(error)});
  }

  remover(id: any){
    this.funcionalidadeService.remover(id).then(() => {
      this.getListaFuncionalidades();
    }).catch((error: any) => {console.log(error)});
  }
  

}
