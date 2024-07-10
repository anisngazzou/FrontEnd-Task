// src/app/features/programs/programs-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramListComponent } from './components/program-list/program-list.component';
import { PieceDetailsComponent } from './components/piece-details/piece-details.component';

const routes: Routes = [
  { path: '', component: ProgramListComponent },
  { path: 'piece/:id', component: PieceDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
