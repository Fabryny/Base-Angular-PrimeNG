import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizar-ajuda',
  templateUrl: './visualizar-ajuda.component.html',
  styleUrls: ['./visualizar-ajuda.component.scss']
})
export class VisualizarAjudaComponent implements OnInit {

  showDialog = false;
  ajudaSelecionada = {};
  constructor() { }

  ngOnInit(): void {
  }
  
  abrirAjuda(produtoID: number, programaID: number, 
            funcionalidadeID: number ){
    const ajuda = {
      produtoID,
      programaID,
      funcionalidadeID,
    };
    this.showDialog = true;
    this.ajudaSelecionada = ajuda;
  }
}
