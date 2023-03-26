import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pai-iframe',
  templateUrl: './pai-iframe.component.html',
  styleUrls: ['./pai-iframe.component.scss']
})
export class PaiIframeComponent implements OnInit {
  




  url: string = "https://localhost:4200/iframe-filho";
  urlSafe= "https://localhost:4200/iframe-filho";


  myEvent = new EventEmitter();

  
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  onIframeLoad() {
    // Obtém uma referência para o elemento iframe
    const iframe: any = document.querySelector('iframe');
      const body = iframe.contentDocument.querySelector('body');
      body.querySelector('.toolbar').style.display= 'none'
  
  }

  

enviaCor(cor:any){


const iframe: any = document.querySelector('iframe');
  
var mensagem = {text:'funcionou', type: "postMessage", data: cor };

iframe.contentWindow.postMessage(mensagem, '*');


}
}
