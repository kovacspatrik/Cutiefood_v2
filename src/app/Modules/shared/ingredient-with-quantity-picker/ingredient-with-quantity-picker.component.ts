import { Component, Input, OnInit } from '@angular/core';
import {
  Ingredient,
  IngredientWithQuantity,
} from 'src/app/Models/ingredient.model';

@Component({
  selector: 'app-ingredient-with-quantity-picker',
  templateUrl: './ingredient-with-quantity-picker.component.html',
  styleUrls: ['./ingredient-with-quantity-picker.component.scss'],
})
export class IngredientWithQuantityPickerComponent implements OnInit {
  ingredientWithQuantity: IngredientWithQuantity;

  @Input() ingredientList: Ingredient[];

  constructor() {}

  ngOnInit(): void {}
}
