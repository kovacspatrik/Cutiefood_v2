import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { AuthService } from 'src/app/Services/auth.service';
import { Recipe } from '../../../Models/recipe.model';
import { RecipeListService } from '../../../Services/recipe-list.service';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss'],
})
export class MyRecipesComponent implements OnInit {
  user: User;
  recipeList: Recipe[];

  constructor(
    private recipeListService: RecipeListService,
    private authService: AuthService
  ) {
    this.user = this.authService.getUser();
  }

  refreshPage() {
    this.initRecipeList();
  }

  initRecipeList() {
    this.recipeListService.getRecipesByUserId(this.user.id).subscribe((res) => {
      this.recipeList = res;
    });
  }

  ngOnInit(): void {
    this.initRecipeList();
  }

  recipeListChange() {
    setTimeout(() => {
      this.initRecipeList();
    }, 500);
  }
}
