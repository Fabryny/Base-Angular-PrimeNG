import { Component } from '@angular/core';
import { UsuarioService } from './shared/services/usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto';
  showSidebar: boolean = false;
  constructor(private usuarioService: UsuarioService) { }
  
  deslogar(){
    this.usuarioService.deslogar();
    this.showSidebar = false;
  }
}


