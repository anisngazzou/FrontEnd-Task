// src/app/features/programs/programs.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramListComponent } from './components/program-list/program-list.component';
import { PieceDetailsComponent } from './components/piece-details/piece-details.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProgramsEffects } from './store/effects/programs.effects';
import { programsReducer } from './store/reducers/programs.reducer';

@NgModule({
  declarations: [
    ProgramListComponent,
    PieceDetailsComponent
  ],
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    StoreModule.forFeature('programs', programsReducer),
    EffectsModule.forFeature([ProgramsEffects])
  ]
})
export class ProgramsModule { }
