import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { PizzaComponent } from './pizza.component';
import { PizzaService } from './services/pizza.service';

const routes: Routes = [
  {
    path: '',
    component: PizzaComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PizzaComponent],
  providers: [PizzaService]
})
export class PizzaModule { }