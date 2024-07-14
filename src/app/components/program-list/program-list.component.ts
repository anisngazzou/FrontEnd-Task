import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  loadMaterials,
  selectMaterial,
} from 'src/app/store/actions/material.actions';
import { Program } from '../../models/program.model';
import {
  loadPrograms,
  selectProgram,
} from '../../store/actions/program.actions';
import {
  selectAllPrograms,
  selectSelectedProgram,
  selectSelectedProgramId,
} from '../../store/selectors/program.selectors';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgramListComponent implements OnInit {
  programs$: Observable<Program[]>;
  selectedProgram$: Observable<Program | undefined>;
  selectedProgramId$: Observable<number | string | null>;
  selectedPieceId: number | string | null = null;
  constructor(private store: Store) {
    this.programs$ = this.store.select(selectAllPrograms);
    this.selectedProgram$ = this.store.select(selectSelectedProgram);
    this.selectedProgramId$ = this.store.select(selectSelectedProgramId);
  }

  ngOnInit(): void {
    this.store.dispatch(loadPrograms());
  }

  onProgramSelect(programId: number): void {
    this.store.dispatch(loadMaterials());
    this.store.dispatch(selectProgram({ programId }));
  }

  onPieceSelect(materialId: string | undefined, pieceId: any): void {
    this.selectedPieceId = pieceId;
    if (materialId) {
      this.store.dispatch(selectMaterial({ materialId }));
    } else {
      this.store.dispatch(selectMaterial({ materialId: null }));
    }
  }
}
