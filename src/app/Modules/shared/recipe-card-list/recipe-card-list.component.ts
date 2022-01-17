import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe.model';

@Component({
  selector: 'app-recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.scss'],
})
export class RecipeCardListComponent implements OnInit {
  @Input() recipeList: Recipe[];
  @Input() isFavoritesPage = false;

  constructor() {}

  ngOnInit(): void {}
}
