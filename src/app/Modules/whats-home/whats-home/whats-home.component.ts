import { Component } from '@angular/core';
import { MOCK_INGREDIENTS } from "../../../Services/mock-files/mock-ingredients";
import {MOCK_RECIPE_LIST} from "../../../Services/mock-files/mock-recipes";
import {Ingredient} from "../../../Models/ingredient.model";
import {Recipe} from "../../../Models/recipe.model";

@Component({
  selector: 'app-whats-home',
  templateUrl: './whats-home.component.html',
  styleUrls: ['./whats-home.component.scss']
})
export class WhatsHomeComponent {
  mock_ingredients = MOCK_INGREDIENTS;
  recipes = MOCK_RECIPE_LIST;

  selectedIngredients: number[];
  recipeListToShow: Recipe[] = [];

  constructor() {}

  getIngredientById(id: number): Ingredient {
    return this.mock_ingredients.find(x => x.id === id);
  }

  filterRecipes(): void {
    if(this.selectedIngredients.length > 0) {
      this.recipeListToShow = [];

      for (let recipe of this.recipes) {
        let goodRecipe = true;

        for (let ingredient of this.selectedIngredients) {
          if (!(recipe.ingredients.some((res) => JSON.stringify(res) === JSON.stringify(this.getIngredientById(ingredient))))){
            goodRecipe = false;
          }
        }

        if (goodRecipe) {
          this.recipeListToShow.push(recipe);
        }

      }

    }
  }
}
