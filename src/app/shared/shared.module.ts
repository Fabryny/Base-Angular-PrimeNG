import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PipeModule } from './pipes/pipe.module';
import { OperadorService } from './services/operador/operador.service';
import { VisualizarAjudaComponent } from './components/visualizar-ajuda/visualizar-ajuda.component';
import { DetalharAjudaComponent } from './components/detalhar-ajuda/detalhar-ajuda.component';
import { LoadInterceptor } from '../interceptors/load.interceptor';
import { IframeFilhoComponent } from './components/iframes/iframe-filho/iframe-filho.component';
import { IframeRoutingModule } from './components/iframes/iframe.routing.module';
import { IframeModule } from './components/iframes/iframe.module';

@NgModule({
  declarations: [
  ],
  imports: [
    PipeModule,
    IframeRoutingModule,
  ],
  exports: [
    PipeModule,
    IframeRoutingModule,
  ],
  providers: [ 
    OperadorService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadInterceptor, multi: true }

  ],
})
export class SharedModule { }
