// src/app/features/programs/store/actions/programs.actions.ts
import { createAction, props } from '@ngrx/store';

export const loadPrograms = createAction('[Programs] Load Programs');

export const loadProgramsSuccess = createAction(
  '[Programs] Load Programs Success',
  props<{ programs: any }>() // Ensure this is an array
);

export const loadProgramsFailure = createAction(
  '[Programs] Load Programs Failure',
  props<{ error: any }>()
);
