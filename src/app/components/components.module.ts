import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PRIMENG_IMPORTS } from '../primeNg-imports';
import { CadastroBasicoComponent } from '../shared/components/cadastro-basico/cadastro-basico.component';
import { ListagemBasicaComponent } from '../shared/components/listagem-basica/listagem-basica.component';
import { RouterModule } from '@angular/router';
import { ListarOperadoresComponent } from './operador/listar/listar-operadores.component';
import { CadastrarOperadorComponent } from './operador/cadastrar/cadastrar-operador.component';
import { SharedModule } from '../shared/shared.module';
import { ListarProgramasComponent } from './programa/listar/listar-programas.component';
import { ListarFuncionalidadesComponent } from './funcionalidade/listar-funcionalidades.component';
import { ListarVersaoComponent } from './versao/listar/listar-versao.component';
import { AjudaInterativaComponent } from './ajuda-interativa/ajuda-interativa.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    HomeComponent,
    CadastroBasicoComponent,
    ListagemBasicaComponent,
    ListarOperadoresComponent,
    CadastrarOperadorComponent,
    ListarProgramasComponent,
    ListarFuncionalidadesComponent,
    ListarVersaoComponent,
    AjudaInterativaComponent,
    LoginComponent,
  
    SidebarComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    
    ...PRIMENG_IMPORTS,
  ],
  exports:[
    HomeComponent,
    CadastroBasicoComponent,
    ListagemBasicaComponent,
    ListarOperadoresComponent,
    CadastrarOperadorComponent,
    ListarProgramasComponent,
    ListarFuncionalidadesComponent,
    ListarVersaoComponent,
    AjudaInterativaComponent,
    LoginComponent,
  
    SidebarComponent,

    ...PRIMENG_IMPORTS
  ]
  
})
export class ComponentsModule { }
