import { Component, OnInit } from '@angular/core';
import { ProgramaService } from 'src/app/shared/services/programa/programa.service';

@Component({
  selector: 'app-listar-programas',
  templateUrl: './listar-programas.component.html',
  styleUrls: ['./listar-programas.component.scss']
})
export class ListarProgramasComponent implements OnInit {
  listaProgramas: any = [];

  constructor(private programaService: ProgramaService) { }

  ngOnInit(): void {
    this.getListaProgramas();
  }

  getListaProgramas(){
    this.programaService.getAll().then((res) => {
      this.listaProgramas = res
    }).catch((error: any) => {console.log(error)});
  }

  salvar(payload: any){
    this.programaService.salvar(payload).then(() => {
      this.getListaProgramas();
    }).catch((error: any) => {console.log(error)});
  }

  atualizar(payload: any){
    this.programaService.atualizar(payload).then(() => {
      this.getListaProgramas();
    }).catch((error: any) => {console.log(error)});
  }

  remover(id: any){
    this.programaService.remover(id).then(() => {
      this.getListaProgramas();
    }).catch((error: any) => {console.log(error)});
  }
  
  
}
