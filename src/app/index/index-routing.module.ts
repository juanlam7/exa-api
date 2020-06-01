import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index.component';
/* import { IndexGuard } from '../guards/index.guard'; */

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    /* canActivate: [IndexGuard], */
    children: [
      /* {
        path: 'welcome',
        loadChildren: () =>
        import('../pages/welcome/welcome.module').then(
          m => m.WelcomePageModule
        )
      },
      {
        path: '',
        loadChildren: () =>
        import('../pages/login/login.module').then(
          m => m.LoginPageModule
        )
      },
      {
        path: 'signup',
        loadChildren: () =>
        import('../pages/signup/signup.module').then(
          m => m.SignupPageModule
        )
      } */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexComponentRoutingModule {}
