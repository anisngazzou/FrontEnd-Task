import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { programReducer } from './reducers/program.reducer';
import { materialReducer } from './reducers/material.reducer';
import { ProgramEffects } from './effects/program.effects';
import { MaterialEffects } from './effects/material.effects';

@NgModule({
  imports: [
    StoreModule.forRoot({
      programs: programReducer,
      materials: materialReducer
    }),
    EffectsModule.forRoot([ProgramEffects, MaterialEffects])
  ],
})
export class AppStoreModule { }
