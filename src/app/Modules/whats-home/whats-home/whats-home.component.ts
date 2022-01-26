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
    let toReturn: Ingredient = {
      id,
      name: 'proba'
    }
    const test = this.mock_ingredients.find(x => x.id === id)
    console.log(test);
    return test
  }

  getIngredientsById(ids: number[]): Ingredient[] {
    let toReturn: Ingredient[] = [];
    for (let item of ids) {
      toReturn.push(this.getIngredientById(item));
    }
    return toReturn;
  }

  hasThatIngredient(recipe: Recipe, ingredient: Ingredient): boolean {
    return recipe.ingredients.includes(ingredient);
  }

  hasEveryIngredients(recipe: Recipe, ingredients: Ingredient[]): boolean {
    for (let ingredient of ingredients) {
      if (!(this.hasThatIngredient(recipe, ingredient))){
        return false;
      }
    }
    return true;
  }

  filterRecipes() {
    if(this.selectedIngredients.length > 0) {
      for (let recipe of this.recipes) {

        console.log(recipe.ingredients.find((res) => res.name === "só"));
      }
    }

    // this.recipeListToShow = this.recipes.filter((recipe) => {
    //   console.log(recipe.ingredients.find((ingredient) =>
    //     ingredient === proba
    //   ));
    // })
  }
}
