// src/app/features/programs/store/reducers/programs.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as ProgramsActions from '../actions/programs.actions';

export const initialState: any[] = [];

export const programsReducer = createReducer(
  initialState,
  on(ProgramsActions.loadProgramsSuccess, (state, { programs }) =>{
    console.log("🚀 ~ on ~ programs:", programs)
    const d = programs.programs
    console.log("🚀 ~ on ~ d:", d)
    return[...d]}),
  // handle other actions
);

export function reducer(state: any, action: any) {
    return programsReducer(state, action);
  }