import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OperadorService } from './services/operador/operador.service';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [ OperadorService],
})
export class SharedModule { }
