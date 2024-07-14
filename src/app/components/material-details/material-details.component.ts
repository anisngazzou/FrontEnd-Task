import { Component } from '@angular/core';
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
})
export class MaterialDetailsComponent {
  selectedMaterial$: Observable<Material | undefined>;
  selectedProgram$: Observable<Program | undefined>;
  material: any;

  constructor(private store: Store) {
    this.selectedMaterial$ = this.store.select(selectSelectedMaterial);
    this.selectedProgram$ = this.store.select(selectSelectedProgram);
  }

  getSortedTemperatureData(
    material: Material
  ): {
    temperature: string;
    density: string | null | undefined;
    poisson: string | null | undefined;
  }[] {
    console.log(
      '🚀 ~ MaterialDetailsComponent ~ getSortedTemperatureData ~ material:',
      material
    );
    const temperatures = material.masseVolumique[0].data[0].Temperature;
    const densities = material.masseVolumique[0].data[1]['Densite'];
    const poissonTemperatures = material.coeffPoisson[0].data[0].Temperature;
    const poissons = material.coeffPoisson[0].data[1]['nuX'];
    const mergedTemperatures = Array.from(
      new Set([...temperatures, ...poissonTemperatures])
    );
    console.log(
      '🚀 ~ MaterialDetailsComponent ~ getSortedTemperatureData ~ mergedTemperatures:',
      mergedTemperatures
    );

    const sortedData = mergedTemperatures
      .map((temperature, index) => {
        console.log(
          '🚀 ~ MaterialDetailsComponent ~ getSortedTemperatureData ~  poissonTemperatures.indexOf(temperature):',
          poissonTemperatures.indexOf(temperature)
        );

        return {
          temperature,
          density: densities[temperatures.indexOf(temperature)],
          poisson: poissons[poissonTemperatures.indexOf(temperature)],
        };
      })
      .sort((a, b) => parseFloat(a.temperature) - parseFloat(b.temperature));

    console.log(
      '🚀 ~ MaterialDetailsComponent ~ getSortedTemperatureData ~ sortedData:',
      sortedData
    );

    return sortedData;
  }
  getSortedTemperatureDataLines(
    material: Material
  ): any {
    console.log(
      '🚀 ~ MaterialDetailsComponent ~ getSortedTemperatureData ~ material:',
      material
    );
    const temperatures = material.masseVolumique[0].data[0].Temperature;
    const densities = material.masseVolumique[0].data[1]['Densite'];
    const poissonTemperatures = material.coeffPoisson[0].data[0].Temperature;
    const poissons = material.coeffPoisson[0].data[1]['nuX'];
    const mergedTemperatures = Array.from(
      new Set([...temperatures, ...poissonTemperatures])
    );

    const sortedData = {temperatures:mergedTemperatures.sort((a: string, b: string) => parseFloat(a) - parseFloat(b)),poissons,densities}

    console.log(
      '🚀 ~ MaterialDetailsComponent ~ getSortedTemperatureData ~ sortedData:',
      sortedData
    );

    return sortedData;
  }
}