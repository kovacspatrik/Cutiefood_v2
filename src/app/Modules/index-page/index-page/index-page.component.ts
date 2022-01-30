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
  recipeListToShow: Recipe[];
  ingredientList: Ingredient[];
  selectedIngredients: number[];
  searchText = '';

  constructor(
    private recipeListService: RecipeListService,
  ) {
    this.recipeList = this.recipeListService.recipeList;

    // this.recipeList.forEach((element) => {
    //   this.recipeList.push(element);
    // })

    this.recipeListToShow = this.recipeListService.recipeList;

    this.ingredientList = this.recipeListService.ingredientsList;
  }

  ngOnInit(): void {}

  OpenNewRecipeModal() {
    alert('ÚJ RECEPT MODAL');
  }

  filterRecipes() {
    if (this.searchText != '') {
      this.recipeListToShow = this.recipeList.filter((element) => element.name.toLowerCase().includes(this.searchText.toLowerCase()));
    } else {
      this.recipeListToShow = this.recipeList;
    }
  }
}
