import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from './models/pizza';
import { PizzaService } from './services/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  pizzas$: Observable<Pizza[]>;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizzas$ = this.pizzaService.getPizzas();
  }

}
