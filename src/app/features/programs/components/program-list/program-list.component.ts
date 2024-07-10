// src/app/features/programs/components/program-list/program-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadPrograms } from '../../store/actions/programs.actions';
import { selectAllPrograms } from '../../store/selectors/programs.selectors';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html'
})
export class ProgramListComponent implements OnInit {
  programs$!: Observable<any[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadPrograms());
    this.programs$ = this.store.select(selectAllPrograms);
  }
}
