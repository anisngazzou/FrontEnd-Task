import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import * as MaterialActions from '../actions/material.actions';

@Injectable()
export class MaterialEffects {
  loadMaterials$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MaterialActions.loadMaterials),
      mergeMap(() =>
        this.dataService.getMaterials().pipe(
          map(materials => MaterialActions.loadMaterialsSuccess({ materials })),
          catchError(error => of(MaterialActions.loadMaterialsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) { }
}
