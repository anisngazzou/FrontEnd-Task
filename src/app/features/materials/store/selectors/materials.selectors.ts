// src/app/features/materials/store/selectors/materials.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectMaterialsFeature = createFeatureSelector<any[]>('materials');

export const selectAllMaterials = createSelector(
  selectMaterialsFeature,
  (state: any[]) => state
);

export const selectMaterialById = (id: any) => createSelector(
  selectAllMaterials,
  (materials: any[]) => {
    console.log("🚀 ~ materials:", materials)
    
    return materials.find(material => material.id === id)}
);
