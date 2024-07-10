// src/app/features/programs/store/effects/programs.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataService } from '../../../../core/services/data.service';
import { loadPrograms,loadProgramsFailure,loadProgramsSuccess } from '../actions/programs.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProgramsEffects {
  loadPrograms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPrograms),
      mergeMap(() =>
        this.dataService.getPrograms().pipe(
          map((programs) => loadProgramsSuccess({ programs })),
          catchError((error) => of(loadProgramsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
