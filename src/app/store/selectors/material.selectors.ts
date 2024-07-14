import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MaterialState } from '../reducers/material.reducer';

export const selectMaterialState = createFeatureSelector<MaterialState>('materials');

export const selectAllMaterials = createSelector(
  selectMaterialState,
  (state: MaterialState) => state.materials
);

export const selectSelectedMaterialId = createSelector(
  selectMaterialState,
  (state: MaterialState) => state.selectedMaterialId
);

export const selectSelectedMaterial = createSelector(
  selectAllMaterials,
  selectSelectedMaterialId,
  (materials, selectedMaterialId) => materials.find(material => material.id === selectedMaterialId)
);
