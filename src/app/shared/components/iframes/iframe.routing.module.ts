import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioAutenticadoGuard } from 'src/app/guards/usuario-autenticado.guard';
import { IframeFilhoComponent } from './iframe-filho/iframe-filho.component';
import { IframeComponent } from './iframe.component';
import { PaiIframeComponent } from './pai-iframe/pai-iframe.component';

const routes: Routes = [

    {
      path: 'iframe',  component: IframeComponent, children: [
       { path: 'pai-iframe', component: PaiIframeComponent},
       { path: 'filho-iframe', component: IframeFilhoComponent}
    
    ]
    },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class IframeRoutingModule { }
