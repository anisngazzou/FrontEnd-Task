// src/app/features/materials/materials.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsRoutingModule } from './materials-routing.module';
import { MaterialDetailsComponent } from './components/material-details/material-details.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialsEffects } from './store/effects/materials.effects';
import { materialsReducer } from './store/reducers/materials.reducer';

@NgModule({
  declarations: [
    MaterialDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    StoreModule.forFeature('materials', materialsReducer),
    EffectsModule.forFeature([MaterialsEffects])
  ]
})
export class MaterialsModule { }
