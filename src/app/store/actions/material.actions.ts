import { createAction, props } from '@ngrx/store';
import { Material } from '../../models/material.model';

export const loadMaterials = createAction('[Material] Load Materials');
export const loadMaterialsSuccess = createAction(
  '[Material] Load Materials Success',
  props<{ materials: Material[] }>()
);
export const loadMaterialsFailure = createAction(
  '[Material] Load Materials Failure',
  props<{ error: any }>()
);

export const selectMaterial = createAction(
  '[Material] Select Material',
  props<{ materialId: string |null }>()
);
