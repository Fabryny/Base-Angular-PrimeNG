import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService{

  constructor(private router: Router) { }

  logar(usuario: any, listaUsuarios: any) : Observable<any> {
      return this.verirficarUsuario(usuario, listaUsuarios).pipe(tap((usuario) => {
        if(!usuario.sucesso) return;
        localStorage.setItem('token', btoa(JSON.stringify("TokenGeradoPelaAPI")));
        localStorage.setItem('usuario', btoa(JSON.stringify(usuario)));
        this.router.navigate(['/home']);
      }));
  }

  private verirficarUsuario(usuario: any, listaUsuarios: any): Observable<any> {
    var usuarioLogado: any = {};

    console.log(listaUsuarios)
    const usuarioEncontrado = listaUsuarios.find((u: any) => u.nomeAcesso === usuario.nome && u.senha === usuario.senha);
    if(usuarioEncontrado){
      usuarioLogado.sucesso = true;
      usuarioLogado.usuario = usuario;
      usuarioLogado.token = "TokenGeradoPelaAPI";
      return of(usuarioLogado);
    }
    usuarioLogado.sucesso = false;
    usuarioLogado.usuario = usuario;
    return of(usuarioLogado);
  }

  deslogar() {
      localStorage.clear();
      this.router.navigate(['']);
  }

  get obterUsuarioLogado(): any {
    const user = localStorage.getItem('usuario')
    if(user){
      return  JSON.parse(atob(user))
    }
    return null;
  }

  get obterIdUsuarioLogado() {
    const user = localStorage.getItem('usuario')
    if(user){
      return  (JSON.parse(atob(user)) as any).id

    }
  }

  get obterTokenUsuario(){
    const token = localStorage.getItem('token')
    if(token){
      return  JSON.parse(token)
    }
  }

  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }



}


