import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { ChartsComponent } from './charts.component';

const routes: Routes = Route.withShell([
  { path: 'charts', component: ChartsComponent, data: { title: extract('Charts') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChartsRoutingModule { }
