import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ChartsRoutingModule,
    ChartsModule
  ],
  declarations: [
    ChartsComponent
  ]
})
export class TransactionChartsModule { }
