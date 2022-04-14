import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() isFavoritesPage: boolean;
  @Input() myRecipes: boolean;

  @Output() recipeDeleted = new EventEmitter<any>();
  @Output() recipeDeletedFromFavs = new EventEmitter();

  selectedRecipe: Recipe;
  numberOfIngredients: number;

  placeholderImage = '../../../../assets/images/cutiefood_placeholder.png';

  constructor() {}

  ngOnInit() {
    this.initCard();
  }

  initCard() {
    this.numberOfIngredients = this.recipe.ingredients.length;
  }

  counter(i: number) {
    return new Array(i);
  }

  emitRecipeDelete() {
    this.recipeDeleted.emit();
  }

  get recipeImageOrPlaceholder(): string {
    if (this.recipe.picture === 'default recipe picture') {
      return '../../../../assets/images/cutiefood_placeholder.png';
    }
    return `${environment.imageUrl}${this.recipe.picture}`;
  }

  deletedFromFavs() {
    this.recipeDeletedFromFavs.emit();
  }
}
