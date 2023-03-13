import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AjudaInterativaService } from '../../services/ajuda-interativa/ajudaInterativa.service';

@Component({
  selector: 'app-detalhar-ajuda',
  templateUrl: './detalhar-ajuda.component.html',
  styleUrls: ['./detalhar-ajuda.component.scss']
})
export class DetalharAjudaComponent implements OnInit {

  @Input() ajudaSelecionada: any = {}
  textoExibido:any =  ''
  constructor(private ajudaInterativaService: AjudaInterativaService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getListaAjudaInterativa()
  }

  getListaAjudaInterativa(){
    this.ajudaInterativaService.getAll().then((res: any) => {
      let ajuda = res.find((v:any) =>
                    v.produto.id === this.ajudaSelecionada.produtoID &&
                    v.programa.id === this.ajudaSelecionada.programaID &&
                    v.funcionalidade.id === this.ajudaSelecionada.funcionalidadeID
                  );
    this.textoExibido = this.sanitizer.bypassSecurityTrustHtml(ajuda.textoEditor);
    }).catch((error: any) => {console.log(error)});
  }


}
