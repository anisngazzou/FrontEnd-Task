// src/app/features/materials/store/actions/materials.actions.ts
import { createAction, props } from '@ngrx/store';

export const loadMaterials = createAction('[Materials] Load Materials');
export const loadMaterialsSuccess = createAction('[Materials] Load Materials Success', props<{ materials: any[] }>());
export const loadMaterialsFailure = createAction('[Materials] Load Materials Failure', props<{ error: any }>());
