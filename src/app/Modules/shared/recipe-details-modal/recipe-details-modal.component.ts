import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from 'src/app/Models/recipe.model';
import {RecipeListService} from "../../../Services/recipe-list.service";

@Component({
  selector: 'app-recipe-details-modal',
  templateUrl: './recipe-details-modal.component.html',
  styleUrls: ['./recipe-details-modal.component.scss'],
})
export class RecipeDetailsModalComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() isFavoritesPage: boolean;

  @Input() isCalendarPage = false;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private recipeListService: RecipeListService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  getIngredientNameById(id: number) {
    return this.recipeListService.getIngredienNametById(id);
  }

  open(content: any) {
    this.modalService.open(content, { size: 'lg', backdrop: true });
  }

  ngOnInit(): void {}
}
