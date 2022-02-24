import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe.model';
import { User } from 'src/app/Models/user.model';
import { AuthService } from 'src/app/Services/auth.service';
import { RecipeListService } from 'src/app/Services/recipe-list.service';

@Component({
  selector: 'app-favourite-recipes',
  templateUrl: './favourite-recipes.component.html',
  styleUrls: ['./favourite-recipes.component.scss'],
})
export class FavouriteRecipesComponent implements OnInit {
  user: User;
  recipeList: Recipe[];

  constructor(
    private recipeListService: RecipeListService,
    private authService: AuthService
  ) {
    this.user = this.authService.getUser();
  }

  ngOnInit(): void {
    this.getMyFavouriteRecipes();
  }

  getMyFavouriteRecipes(): void {
    this.recipeListService
      .getUsersFavouriteRecipes(this.user.id)
      .subscribe((res) => {
        this.recipeList = res;
      });
  }
}
