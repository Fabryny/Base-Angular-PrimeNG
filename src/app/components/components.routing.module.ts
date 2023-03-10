import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListagemBasicaComponent } from '../shared/components/listagem-basica/listagem-basica.component';
import { ListarOperadoresComponent } from './operador/listar/listar-operadores.component';
import { ListarProgramasComponent } from './programa/listar/listar-programas.component';
import { ListarFuncionalidadesComponent } from './funcionalidade/listar-funcionalidades.component';
import { ListarVersaoComponent } from './versao/listar/listar-versao.component';
import { AjudaInterativaComponent } from './ajuda-interativa/ajuda-interativa.component';
import { LoginComponent } from './login/login.component';
import { UsuarioAutenticadoGuard } from '../guards/usuario-autenticado.guard';
import { NotFoundGuard } from '../guards/not-found.guard';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent, canActivate: [UsuarioAutenticadoGuard],
  }, 
  {
    path: 'listagem-basica/:tipo', component: ListagemBasicaComponent, canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: 'listar-operadores', component: ListarOperadoresComponent, canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: 'listar-programas', component: ListarProgramasComponent, canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: 'listar-funcionalidades', component: ListarFuncionalidadesComponent, canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: 'listar-versoes', component: ListarVersaoComponent, canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: 'ajuda-interativa', component: AjudaInterativaComponent, canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: '**',  component: LoginComponent, canActivate: [NotFoundGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
