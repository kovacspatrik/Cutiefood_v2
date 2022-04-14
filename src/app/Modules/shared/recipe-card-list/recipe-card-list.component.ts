import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe.model';

@Component({
  selector: 'app-recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.scss'],
})
export class RecipeCardListComponent {
  @Input() recipeList: Recipe[];
  @Input() isFavoritesPage = false;
  @Input() myRecipes = false;
  @Output() emitDeleteRecipe = new EventEmitter<any>();
  @Output() deletedFromFavs = new EventEmitter();

  recipeDeleted() {
    this.emitDeleteRecipe.emit();
  }

  recipeDeletedFromFavs() {
    this.deletedFromFavs.emit();
  }
}
