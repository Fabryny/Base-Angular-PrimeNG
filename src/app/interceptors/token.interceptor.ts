import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { UsuarioService } from '../shared/services/usuario/usuario.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private usuarioService : UsuarioService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const token = this.usuarioService.obterTokenUsuario;
        
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                    token: `${token}`
                }
            });
            return next.handle(request)
        }
        else {
            return next.handle(request);
        }
    }
}