// src/app/features/materials/store/reducers/materials.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as MaterialsActions from '../actions/materials.actions';

export const initialState: any[] = [];

export const materialsReducer = createReducer(
  initialState,
  on(MaterialsActions.loadMaterialsSuccess, (state, { materials }) => [...materials]),
  // handle other actions
);

export function reducer(state: any, action: any) {
    return materialsReducer(state, action);
  }