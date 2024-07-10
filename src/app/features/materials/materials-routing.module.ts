// src/app/features/materials/materials-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDetailsComponent } from './components/material-details/material-details.component';

const routes: Routes = [
  { path: '', component: MaterialDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialsRoutingModule { }
