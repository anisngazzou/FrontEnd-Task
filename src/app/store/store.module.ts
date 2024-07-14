import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialEffects } from './effects/material.effects';
import { ProgramEffects } from './effects/program.effects';
import { materialReducer } from './reducers/material.reducer';
import { programReducer } from './reducers/program.reducer';

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
