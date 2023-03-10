import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './components/login/login.component';
import { NotFoundGuard } from './guards/not-found.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/login`, pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
