import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)},
  {path:'portfolio',loadChildren:()=>import('./portfolio/portfolio.module').then(mod=>mod.PortfolioModule)},
  {path:'services',loadChildren:()=>import('./services/services.module').then(mod=>mod.ServicesModule)},
  {path:'cities',loadChildren:()=>import('./cities/cities.module').then(mod=>mod.CitiesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
