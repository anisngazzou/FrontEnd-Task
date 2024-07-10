// src/app/features/programs/store/selectors/programs.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectProgramsFeature = createFeatureSelector<any[]>('programs');

export const selectAllPrograms = createSelector(
  selectProgramsFeature,
  (state: any[]) => state
);
