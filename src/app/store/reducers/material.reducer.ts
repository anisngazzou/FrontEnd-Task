import { createReducer, on } from '@ngrx/store';
import * as MaterialActions from '../actions/material.actions';
import { Material } from '../../models/material.model';

export interface MaterialState {
  materials: Material[];
  selectedMaterialId: string | null;
  error: any;
}

export const initialState: MaterialState = {
  materials: [],
  selectedMaterialId: null,
  error: null,
};

export const materialReducer = createReducer(
  initialState,
  on(MaterialActions.loadMaterialsSuccess, (state, { materials }) => ({
    ...state,
    materials,
  })),
  on(MaterialActions.loadMaterialsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(MaterialActions.selectMaterial, (state, { materialId }) => ({
    ...state,
    selectedMaterialId: materialId,
  }))
);
