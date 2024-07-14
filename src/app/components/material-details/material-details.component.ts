import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Material } from '../../models/material.model';
import { Program } from '../../models/program.model';
import { selectSelectedMaterial } from '../../store/selectors/material.selectors';
import { selectSelectedProgram } from '../../store/selectors/program.selectors';

@Component({
  selector: 'app-material-details',
  templateUrl: './material-details.component.html',
  styleUrls: ['./material-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialDetailsComponent implements OnInit {
  selectedMaterial$: Observable<Material | undefined>;
  selectedProgram$: Observable<Program | undefined>;
  sortedTemperatureData: {
    temperature: string;
    density: string | null | undefined;
    poisson: string | null | undefined;
  }[] = [];
  sortedDataLinesDisplay: {
    temperatures: string[];
    densities: (string | null | undefined)[];
    poissons: (string | null | undefined)[];
  } = { temperatures: [], densities: [], poissons: [] };
  displayMode: 'table' | 'lines' | 'chart' = 'lines';
  constructor(private store: Store) {
    this.selectedMaterial$ = this.store.select(selectSelectedMaterial);
    this.selectedProgram$ = this.store.select(selectSelectedProgram);
  }

  ngOnInit(): void {
    this.selectedMaterial$.subscribe((material) => {
      if (material) {
        this.sortedTemperatureData = this.getSortedTemperatureData(material);
        this.sortedDataLinesDisplay = this.getSortedTemperatureDataLinesDisplay(material);
      }
    });
  }

  getSortedTemperatureData(
    material: Material
  ): {
    temperature: string;
    density: string | null | undefined;
    poisson: string | null | undefined;
  }[] {
    const temperatures = material.masseVolumique[0].data[0].Temperature;
    const poissonTemperatures = material.coeffPoisson[0].data[0].Temperature;
    const densities = material.masseVolumique[0].data[1]['Densite'];
    const poissons = material.coeffPoisson[0].data[1]['nuX'];
    const mergedTemperatures = Array.from(new Set([...temperatures, ...poissonTemperatures]));

    const sortedData = mergedTemperatures.map((temperature) => ({
      temperature,
      density: densities[temperatures.indexOf(temperature)] ?? 'N/A',
      poisson: poissons[poissonTemperatures.indexOf(temperature)] ?? 'N/A',
    })).sort((a, b) => parseFloat(a.temperature) - parseFloat(b.temperature));

    return sortedData;
  }

  getSortedTemperatureDataLinesDisplay(
    material: Material
  ): { temperatures: string[], densities: (string | null | undefined)[], poissons: (string | null | undefined)[] } {
    const temperatures = material.masseVolumique[0].data[0].Temperature;
    const densities = material.masseVolumique[0].data[1]['Densite'];
    const poissonTemperatures = material.coeffPoisson[0].data[0].Temperature;
    const poissons = material.coeffPoisson[0].data[1]['nuX'];

    const mergedTemperatures = Array.from(new Set([...temperatures, ...poissonTemperatures])).sort((a, b) => parseFloat(a) - parseFloat(b));

    return {
      temperatures: mergedTemperatures,
      densities,
      poissons,
    };
  }
  onDisplayModeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.displayMode = target.value as 'table' | 'lines' | 'chart';
  }
  trackByIndex(index: number, _: any): number {
    return index;
  }
}
