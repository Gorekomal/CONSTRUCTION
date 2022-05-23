import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionconsultantComponent } from './constructionconsultant/constructionconsultant.component';
import { ReconstructionserviceComponent } from './reconstructionservice/reconstructionservice.component';
import { ArchitectrualdesignComponent } from './architectrualdesign/architectrualdesign.component';
import { GreenbuildingComponent } from './greenbuilding/greenbuilding.component';
import { HouserenovationComponent } from './houserenovation/houserenovation.component';
import {  RouterModule, Routes } from '@angular/router';

const routes :Routes=[
  {path:'architectrualdesign',component:ArchitectrualdesignComponent},
  {path:'constructionconsultant',component:ConstructionconsultantComponent},
  {path:'greenbuilding',component:GreenbuildingComponent},
  {path:'houserenovation',component:HouserenovationComponent},
  {path:'reconstructionservice',component:ReconstructionserviceComponent},

  
]

@NgModule({
  declarations: [
    ConstructionconsultantComponent,
    ReconstructionserviceComponent,
    ArchitectrualdesignComponent,
    GreenbuildingComponent,
    HouserenovationComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class ServicesModule { }
