import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestillingComponent } from './bestilling/bestilling.component';
import { ForestillingerComponent } from './forestillinger/forestillinger.component';

const routes: Routes = [
  {
    path: '',
    component: ForestillingerComponent,
    children: []
  },
  {
    path: 'bestilling',
    component: BestillingComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
