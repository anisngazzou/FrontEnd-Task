import { createReducer, on } from '@ngrx/store';
import * as ProgramActions from '../actions/program.actions';
import { Program } from '../../models/program.model';

export interface ProgramState {
  programs: Program[];
  selectedProgramId: number | null;
  error: any;
}

export const initialState: ProgramState = {
  programs: [],
  selectedProgramId: null,
  error: null,
};

export const programReducer = createReducer(
  initialState,
  on(ProgramActions.loadProgramsSuccess, (state, { programs }) => ({
    ...state,
    programs,
  })),
  on(ProgramActions.loadProgramsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(ProgramActions.selectProgram, (state, { programId }) => ({
    ...state,
    selectedProgramId: programId,
  }))
);
