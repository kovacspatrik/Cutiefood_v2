import { Component, OnInit } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Ingredient } from 'src/app/Models/ingredient.model';
import { Recipe } from 'src/app/Models/recipe.model';
import { RecipeListService } from 'src/app/Services/recipe-list.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
})
export class IndexPageComponent implements OnInit {
  recipeList: Recipe[];
  ingredientList: Ingredient[];
  selectedIngredients: number[];

  constructor(
    private recipeListService: RecipeListService,
    private config: NgSelectConfig
  ) {
    this.recipeList = this.recipeListService.recipeList;
    this.ingredientList = this.recipeListService.IngredientsList;
  }

  ngOnInit(): void {}

  OpenNewRecipeModal() {
    alert('ÚJ RECEPT MODAL');
  }

  filterRecipes() {
    console.log(this.selectedIngredients);
  }
}
