import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'programs', loadChildren: () => import('./features/programs/programs.module').then(m => m.ProgramsModule) },
  { path: 'materials', loadChildren: () => import('./features/materials/materials.module').then(m => m.MaterialsModule) },
  { path: '', redirectTo: 'materials', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
