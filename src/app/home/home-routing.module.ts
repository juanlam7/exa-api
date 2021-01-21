import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeGuard } from '../guards/home.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [HomeGuard],
    children: [
      {
        path: 'lobby',
        loadChildren: () =>
        import('../pages/lobby/lobby.module').then(
          m => m.LobbyComponentModule
        )
      }
      /* {
        path: 'menu',
        loadChildren: () => 
        import('../pages/menu/menu.module').then(
           m => m.MenuPageModule
        )
      },
      {
        path: 'admin',
        loadChildren: () => 
        import('../pages/admin/admin.module').then(
           m => m.AdminPageModule
        )
      } */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeComponentRoutingModule {}
