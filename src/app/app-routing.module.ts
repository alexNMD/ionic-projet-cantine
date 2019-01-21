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
  },
  { path: ' ',
    loadChildren: './add-page/add-page.module#AddPagePageModule'
  },
  {
    path: 'plat-detail/:key',
    loadChildren: './plat-detail/plat-detail.module#PlatDetailPageModule'
  },
  {
    path: 'edit-page/:key',
    loadChildren: './edit-page/edit-page.module#EditPagePageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
