// src/app/features/materials/components/material-details/material-details.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadMaterials } from '../../store/actions/materials.actions';
import { selectAllMaterials } from '../../store/selectors/materials.selectors';

@Component({
  selector: 'app-material-details',
  templateUrl: './material-details.component.html'
})
export class MaterialDetailsComponent implements OnInit {
  constructor(private store: Store) {}
  materials$: Observable<any[]> | undefined;



  

  ngOnInit() {
    this.store.dispatch(loadMaterials());
    this.materials$ = this.store.select(selectAllMaterials);
  }
}
