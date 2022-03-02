import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe.model';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MOCK_INGREDIENTS } from '../../../Services/mock-files/mock-ingredients';
import { RecipeListService } from '../../../Services/recipe-list.service';
import { Ingredient } from '../../../Models/ingredient.model';
import { AuthService } from 'src/app/Services/auth.service';
import { IngredientService } from 'src/app/Services/ingredient.service';

@Component({
  selector: 'app-upload-edit-recipe-modal',
  templateUrl: './upload-edit-recipe-modal.component.html',
  styleUrls: ['./upload-edit-recipe-modal.component.scss'],
})
export class UploadEditRecipeModalComponent {
  @Input() isEdit: boolean = false;
  @Input() recipe?: Recipe;

  allIngredientsList: Ingredient[] = [];

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private recipeListService: RecipeListService,
    private ingredientService: IngredientService,
    private auth: AuthService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content, { size: 'lg', backdrop: true });
  }

  ngOnInit() {
    if (!this.isEdit) {
      this.recipe = new Recipe();
    }

    this.ingredientService.getIngredients().subscribe((res) => {
      this.allIngredientsList = res;
    });
  }

  onSave() {
    this.recipe.user = this.auth.getUser();

    console.log(this.recipe);
  }
}
