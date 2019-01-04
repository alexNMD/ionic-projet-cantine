import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'account-page',
    loadChildren: './account-page/account-page.module#AccountPagePageModule'
   },
  { 
    path: 'panier-page',
    loadChildren: './panier-page/panier-page.module#PanierPagePageModule'
   },
  { 
    path: 'historique-page',
    loadChildren: './historique-page/historique-page.module#HistoriquePagePageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
