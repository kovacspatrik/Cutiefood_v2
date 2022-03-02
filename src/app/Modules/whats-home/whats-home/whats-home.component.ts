import { Component, OnInit } from '@angular/core';
import {
  Ingredient,
  IngredientWithQuantity,
} from '../../../Models/ingredient.model';
import { Recipe } from '../../../Models/recipe.model';
import { RecipeListService } from 'src/app/Services/recipe-list.service';
import { IngredientService } from 'src/app/Services/ingredient.service';

@Component({
  selector: 'app-whats-home',
  templateUrl: './whats-home.component.html',
  styleUrls: ['./whats-home.component.scss'],
})
export class WhatsHomeComponent implements OnInit {
  ingredients: Ingredient[];
  recipes: Recipe[];

  selectedIngredients: Ingredient[];
  recipeListToShow: Recipe[] = [];

  constructor(
    private recipeService: RecipeListService,
    private ingredientService: IngredientService
  ) {
    this.initIngredientList();
    this.initRecipeList();
  }

  ngOnInit(): void {}

  initRecipeList() {
    this.recipeService.getRecipes().subscribe((res) => {
      this.recipes = res;
    });
  }

  initIngredientList() {
    this.ingredientService.getIngredients().subscribe((res) => {
      this.ingredients = res;
    });
  }

  showMatchingRecipes(items: Ingredient[]) {
    this.selectedIngredients = items;

    if (!(this.selectedIngredients.length > 2)) {
      this.recipeListToShow = [];
    }

    if (this.selectedIngredients.length > 0) {
      this.recipes.forEach((recipe) => {
        if (this.hasHalfOfSelected(recipe, this.selectedIngredients)) {
          if (!this.recipeListToShow.includes(recipe)) {
            this.recipeListToShow.push(recipe);
          }
        }
      });
    }
  }

  hasHalfOfSelected(
    recipe: Recipe,
    selectedIngredients: Ingredient[]
  ): boolean {
    const recipeIngredientCount = recipe.ingredients.length;
    let matchingIngredients = 0;

    recipe.ingredients.forEach((ingredient: IngredientWithQuantity) => {
      selectedIngredients.forEach((selected) => {
        if (selected.name === ingredient.ingredient.name) {
          matchingIngredients++;
        }
      });
    });

    if (matchingIngredients >= recipeIngredientCount / 2) {
      return true;
    } else {
      return false;
    }
  }
}
