import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FutureworkComponent } from './futurework/futurework.component';
import { OffersComponent } from './offers/offers.component';
import { RouterModule, Routes } from '@angular/router';

const routes :Routes=[
  {path:'aboutus',component:AboutusComponent},
  {path:'futurework',component:FutureworkComponent},
  {path:'offers',component:OffersComponent}
  
]


@NgModule({
  declarations: [
    AboutusComponent,
    FutureworkComponent,
    OffersComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class HomeModule { }
