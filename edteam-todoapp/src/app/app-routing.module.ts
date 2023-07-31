import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { validakteSessionGuard } from '@core/guards/validate-session.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:() => import('@modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path:'task',
    loadChildren:() => import('@modules/task/task.module').then((m) => m.TaskModule)
    // // // // canActivate:[validateSessionGuard]
  },
  {
    path:'**',
    redirectTo: '/task'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
