import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DolgozokComponent } from './dolgozok/dolgozok.component';
import { EuComponent } from './eu/eu.component';
import { F1Component } from './f1/f1.component';
import { FifaComponent } from './fifa/fifa.component';
import { SnookerComponent } from './snooker/snooker.component';

const routes: Routes = [
  {path:"dolgozok",component:DolgozokComponent},
  {path:"eu",component:EuComponent},
  {path:"f1",component:F1Component},
  {path:"fifa",component:FifaComponent},
  {path:"snooker",component:SnookerComponent},
  {path:"",redirectTo:"/dolgozok",pathMatch:"full"},
  {path:"**",component:DolgozokComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
