import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProgramState } from '../reducers/program.reducer';

export const selectProgramState = createFeatureSelector<ProgramState>('programs');

export const selectAllPrograms = createSelector(
  selectProgramState,
  (state: ProgramState) => state.programs
);

export const selectSelectedProgramId = createSelector(
  selectProgramState,
  (state: ProgramState) => state.selectedProgramId
);

export const selectSelectedProgram = createSelector(
  selectAllPrograms,
  selectSelectedProgramId,
  (programs, selectedProgramId) => programs.find(program => program.ID === selectedProgramId)
);
