import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ProgramListComponent } from './components/program-list/program-list.component';
import { MaterialDetailsComponent } from './components/material-details/material-details.component';
import { AppStoreModule } from './store/store.module';
import { DensityChartComponent } from './components/density-chart/density-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [
    AppComponent,
    ProgramListComponent,
    MaterialDetailsComponent,
    DensityChartComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    HttpClientModule,
    AppStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
