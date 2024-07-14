import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import * as ProgramActions from '../actions/program.actions';

@Injectable()
export class ProgramEffects {
  loadPrograms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProgramActions.loadPrograms),
      mergeMap(() =>
        this.dataService.getPrograms().pipe(
          map(programs => ProgramActions.loadProgramsSuccess({ programs })),
          catchError(error => of(ProgramActions.loadProgramsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) { }
}
