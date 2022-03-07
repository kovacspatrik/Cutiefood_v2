import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from 'src/app/Models/recipe.model';
import { RecipeListService } from 'src/app/Services/recipe-list.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() isFavoritesPage: boolean;
  @Input() myRecipes: boolean;

  selectedRecipe: Recipe;
  numberOfIngredients: number;

  placeholderImage = '../../../../assets/images/cutiefood_placeholder.png';

  constructor(private recipeListService: RecipeListService) {}

  ngOnInit() {
    //this.recipe = this.recipeListService.getRecipeById(this.id);
    this.numberOfIngredients = this.recipe.ingredients.length;
  }

  counter(i: number) {
    return new Array(i);
  }

  get recipeImageOrPlaceholder(): string {
    return this.placeholderImage;
  }
}
