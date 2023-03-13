import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PipeModule } from './pipes/pipe.module';
import { OperadorService } from './services/operador/operador.service';
import { VisualizarAjudaComponent } from './components/visualizar-ajuda/visualizar-ajuda.component';
import { DetalharAjudaComponent } from './components/detalhar-ajuda/detalhar-ajuda.component';
import { LoadInterceptor } from '../interceptors/load.interceptor';

@NgModule({
  declarations: [
  ],
  imports: [
    PipeModule,
  ],
  exports: [
    PipeModule,
  ],
  providers: [ 
    OperadorService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadInterceptor, multi: true }

  ],
})
export class SharedModule { }
