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
  @Input() id: number;
  @Input() isFavoritesPage: boolean;

  selectedRecipe!: Recipe;
  numberOfIngredients!: number;

  constructor(private recipeListService: RecipeListService) {}

  ngOnInit() {
    this.selectedRecipe = this.recipeListService.getRecipeById(this.id);
    this.numberOfIngredients = this.selectedRecipe.ingredients.length;
  }

  counter(i: number) {
    return new Array(i);
  }
}
