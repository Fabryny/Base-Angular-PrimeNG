import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {
  @Input() mensagem: any; //recebido pelo postMessage

  constructor() { }

  ngOnInit(): void {
     // Adiciona um event listener para ouvir as mensagens do iframe
 
      window.addEventListener('message', function(e){
    // para ter acesso ao dado temos que acessar a propriedade data
    console.log(e.data)  
    const divTeste: any = document.querySelector('#teste');
    divTeste.style.color= e.data.data
    if(e.data.text){

      divTeste.innerHTML=e.data.text
    }
  })
    
  }

}
