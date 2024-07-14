import { createAction, props } from '@ngrx/store';
import { Program } from '../../models/program.model';

export const loadPrograms = createAction('[Program] Load Programs');
export const loadProgramsSuccess = createAction(
  '[Program] Load Programs Success',
  props<{ programs: Program[] }>()
);
export const loadProgramsFailure = createAction(
  '[Program] Load Programs Failure',
  props<{ error: any }>()
);

export const selectProgram = createAction(
  '[Program] Select Program',
  props<{ programId: number }>()
);
