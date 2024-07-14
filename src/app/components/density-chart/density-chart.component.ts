import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Material } from '../../models/material.model';


@Component({
  selector: 'app-density-chart',
  templateUrl: './density-chart.component.html',
  styleUrls: ['./density-chart.component.scss']
})
export class DensityChartComponent implements OnChanges {
  @Input() material: Material | null = null;

  densityData: any[] = [];
  poissonData: any[] = [];

  // Chart options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Température (°C)';
  showYAxisLabel = true;
  yAxisLabelDensity = 'Densité';
  yAxisLabelPoisson = "nuX";
 
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['material'] && this.material) {
      this.updateChartData();
    }
  }

  private updateChartData(): void {
    if (!this.material) {
      return;
    }

    const temperatures = this.material.masseVolumique[0].data[0].Temperature;
    const densities = this.material.masseVolumique[0].data[1]['Densite'];
    const poissonTemperatures = this.material.coeffPoisson[0].data[0].Temperature;
    const poissons = this.material.coeffPoisson[0].data[1]['nuX'];
  
    this.densityData = temperatures.map((temp, index) => ({
      name: temp,
      value: densities[index]
    })).sort((a, b) => parseFloat(a.name) - parseFloat(b.name));
    this.poissonData = poissonTemperatures.map((temp, index) => ({
      name: temp,
      value: poissons[index]
    })).sort((a, b) => parseFloat(a.name) - parseFloat(b.name));    
  }
  

}
