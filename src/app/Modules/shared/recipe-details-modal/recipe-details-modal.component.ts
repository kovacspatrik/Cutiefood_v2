import { Component, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from 'src/app/Models/recipe.model';
import { User } from 'src/app/Models/user.model';
import { AuthService } from 'src/app/Services/auth.service';
import { RecipeListService } from '../../../Services/recipe-list.service';

@Component({
  selector: 'app-recipe-details-modal',
  templateUrl: './recipe-details-modal.component.html',
  styleUrls: ['./recipe-details-modal.component.scss'],
})
export class RecipeDetailsModalComponent {
  @Input() recipe: Recipe;
  @Input() isFavoritesPage: boolean;

  @Input() isCalendarPage = false;

  user: User;
  placeholderImage: '../../../../assets/images/cutiefood_placeholder.png';

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private recipeListService: RecipeListService,
    private authService: AuthService
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    this.user = this.authService.getUser();
  }

  getIngredientNameById(id: number) {
    return this.recipeListService.getIngredienNametById(id);
  }

  open(content: any) {
    this.modalService.open(content, { size: 'lg', backdrop: true });
  }

  addToFavourites() {
    this.recipeListService.addToFavs(this.recipe, this.user).subscribe();
    this.modalService.dismissAll();
  }

  deleteFromFavourites() {
    this.recipeListService
      .deleteFromFavs(this.user.id, this.recipe.id)
      .subscribe();
    this.modalService.dismissAll();
  }

  recipeImageOrPlaceholder(): string {
    return this.placeholderImage;
  }
}
