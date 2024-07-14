import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppComponent } from './app.component';
import { DensityChartComponent } from './components/density-chart/density-chart.component';
import { MaterialDetailsComponent } from './components/material-details/material-details.component';
import { ProgramListComponent } from './components/program-list/program-list.component';
import { AppStoreModule } from './store/store.module';
@NgModule({
  declarations: [
    AppComponent,
    ProgramListComponent,
    MaterialDetailsComponent,
    DensityChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    AppStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: true 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
