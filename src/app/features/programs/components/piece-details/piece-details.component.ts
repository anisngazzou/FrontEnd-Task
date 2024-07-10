// src/app/features/programs/components/piece-details/piece-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadMaterials } from '../../../materials/store/actions/materials.actions';
import { selectMaterialById } from '../../../materials/store/selectors/materials.selectors';

@Component({
  selector: 'app-piece-details',
  templateUrl: './piece-details.component.html'
})
export class PieceDetailsComponent implements OnInit {
  material$!: Observable<any> ;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    const pieceId = this.route.snapshot.paramMap.get('id');
    console.log("🚀 ~ PieceDetailsComponent ~ ngOnInit ~ pieceId:", pieceId)
    this.store.dispatch(loadMaterials());
    this.material$ = this.store.select(selectMaterialById(pieceId));
  }
}
