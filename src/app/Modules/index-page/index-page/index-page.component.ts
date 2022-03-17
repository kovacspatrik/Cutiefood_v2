import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Ingredient } from 'src/app/Models/ingredient.model';
import { Recipe } from 'src/app/Models/recipe.model';
import { RecipeListService } from 'src/app/Services/recipe-list.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
})
export class IndexPageComponent implements OnInit {
  recipeList: Recipe[];
  recipeListToShow: Recipe[];
  searchText = '';

  constructor(
    private recipeListService: RecipeListService,
    private http: HttpClient
  ) {
    // this.recipeList = this.recipeListService.recipeList;
    // this.recipeListToShow = this.recipeListService.recipeList;
  }

  ngOnInit(): void {
    this.recipeListService.getRecipes().subscribe((res) => {
      this.recipeList = res;
      this.recipeListToShow = res;
    });
  }

  filterRecipes() {
    if (this.searchText != '') {
      this.recipeListToShow = this.recipeList.filter((element) =>
        element.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.recipeListToShow = this.recipeList;
    }
  }
}
