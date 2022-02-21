import { Injectable } from '@angular/core';
import { Recipe } from '../Models/recipe.model';
import { MOCK_RECIPE_LIST } from './mock-files/mock-recipes';
import { MOCK_INGREDIENTS } from './mock-files/mock-ingredients';
import { Ingredient } from '../Models/ingredient.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipeListService {
  recipeList: Recipe[];
  ingredientsList: Ingredient[];

  constructor(private http: HttpClient) {
    this.recipeList = MOCK_RECIPE_LIST;
    this.ingredientsList = MOCK_INGREDIENTS;
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${environment.apiUrl}/recipe`);
  }

  getRecipesByUserId(id: number): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${environment.apiUrl}/recipe/user/${id}`);
  }

  deleteRecipe(id: number) {
    return this.http.delete(`${environment.apiUrl}/recipe/${id}/delete`);
  }

  //MOCK

  getRecipeById(id: number): Recipe {
    return this.recipeList.find((element) => element.id === id);
  }

  getIngredienNametById(id: number): string {
    const ingredient = this.ingredientsList.find(
      (element) => element.id === id
    );
    return ingredient.name;
  }

  getIngredientById(id: number): Ingredient {
    return this.ingredientsList.find((element) => element.id === id);
  }

  getIngredientListById(idList: number[]): Ingredient[] {
    const ingredients: Ingredient[] = [];
    for (let i = 0; i < idList.length; i++) {
      ingredients.push(this.getIngredientById(idList[i]));
    }
    return ingredients;
  }
}
