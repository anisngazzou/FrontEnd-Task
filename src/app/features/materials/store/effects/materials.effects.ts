// src/app/features/materials/store/effects/materials.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataService } from '../../../../core/services/data.service';
import * as MaterialsActions from '../actions/materials.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MaterialsEffects {
  loadMaterials$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MaterialsActions.loadMaterials),
      mergeMap(() =>
        this.dataService.getMaterials().pipe(
          map(materials => MaterialsActions.loadMaterialsSuccess({ materials })),
          catchError(error => of(MaterialsActions.loadMaterialsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}
