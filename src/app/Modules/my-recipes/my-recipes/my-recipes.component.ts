import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../Models/recipe.model";
import {RecipeListService} from "../../../Services/recipe-list.service";

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent implements OnInit {
  recipeList: Recipe[];

  constructor(private recipeListService: RecipeListService) {
    this.recipeList = this.recipeListService.recipeList;
  }

  ngOnInit(): void {
    this.recipeList = this.recipeList.filter((res) => res.uploader.name === 'Tencsi');
  }

}
