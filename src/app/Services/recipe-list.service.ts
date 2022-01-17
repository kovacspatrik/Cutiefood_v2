import { Injectable } from '@angular/core';
import { Recipe } from '../Models/recipe.model';
import { MOCK_RECIPE_LIST } from './mock-files/mock-recipes';
import { MOCK_INGREDIENTS } from './mock-files/mock-ingredients';
import { Ingredient } from '../Models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeListService {
  recipeList: Recipe[];
  IngredientsList: Ingredient[];

  constructor() {
    this.recipeList = MOCK_RECIPE_LIST;
    this.IngredientsList = MOCK_INGREDIENTS;
  }

  getRecipeById(id: number): Recipe {
    return this.recipeList.find((element) => element.id === id)!;
  }
}
