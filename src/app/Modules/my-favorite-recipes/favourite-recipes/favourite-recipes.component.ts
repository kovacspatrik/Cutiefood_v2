import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe.model';
import { RecipeListService } from 'src/app/Services/recipe-list.service';

@Component({
  selector: 'app-favourite-recipes',
  templateUrl: './favourite-recipes.component.html',
  styleUrls: ['./favourite-recipes.component.scss'],
})
export class FavouriteRecipesComponent implements OnInit {
  recipeList: Recipe[];

  constructor(private recipeListService: RecipeListService) {
    this.recipeList = this.recipeListService.recipeList;
  }

  ngOnInit(): void {}
}
