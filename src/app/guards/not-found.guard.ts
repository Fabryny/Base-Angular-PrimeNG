import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../shared/services/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class NotFoundGuard implements CanActivate {
  constructor(
    private usuarioService: UsuarioService,
    private router: Router) { }
    
  
    canActivate(){
      if (this.usuarioService.logado) {
        this.router.navigate(['/home']);
        return true
      }
      this.router.navigate(['']);
      return true;
    }
  
}
