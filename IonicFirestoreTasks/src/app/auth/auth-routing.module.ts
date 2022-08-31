import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '',
 loadChildren:() => import('./pages/login/login.module').then(x => x.LoginPageModule)
}]; //na versão do curso estava loadChildren: './pages/login/login.module#LoginPageModule'

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
