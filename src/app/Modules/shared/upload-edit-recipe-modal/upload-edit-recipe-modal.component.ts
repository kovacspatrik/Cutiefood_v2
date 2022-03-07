import { Component, Input, ViewChild } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe.model';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { RecipeListService } from '../../../Services/recipe-list.service';
import {
  Ingredient,
  IngredientWithQuantity,
} from '../../../Models/ingredient.model';
import { AuthService } from 'src/app/Services/auth.service';
import { IngredientService } from 'src/app/Services/ingredient.service';
import { MatSelect } from '@angular/material/select';
import { MatList } from '@angular/material/list';

@Component({
  selector: 'app-upload-edit-recipe-modal',
  templateUrl: './upload-edit-recipe-modal.component.html',
  styleUrls: ['./upload-edit-recipe-modal.component.scss'],
})
export class UploadEditRecipeModalComponent {
  @ViewChild('ingredientList') selectionList: MatList;
  @ViewChild('select') selectDropdown: MatSelect;
  @Input() isEdit: boolean = false;
  @Input() recipe?: Recipe;

  allIngredientsList: Ingredient[] = [];
  image: File = null;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private recipeListService: RecipeListService,
    private ingredientService: IngredientService,
    private auth: AuthService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.ingredientService.getIngredients().subscribe((res) => {
      this.allIngredientsList = res;
    });
  }

  open(content: any) {
    this.modalService.open(content, { size: 'lg', backdrop: true });
  }

  ngOnInit() {
    if (!this.isEdit) {
      this.recipe = new Recipe();
      this.recipe.ingredients = [];
    }
  }

  onSave() {
    this.recipe.user = this.auth.getUser();

    console.log(this.recipe);
    if (this.isEdit) {
      //  RECEPT UPDATE
    } else {
      this.recipeListService.uploadRecipe(this.recipe).subscribe();
    }
  }

  addIngredient(item: Ingredient) {
    console.log(item);
    const data: IngredientWithQuantity = {
      quantity: '',
      ingredient: item,
    };
    this.recipe.ingredients.push(data);
  }

  removeIngredient(event: IngredientWithQuantity) {
    for (let i = 0; i < this.recipe.ingredients.length; i++) {
      if (this.recipe.ingredients[i] === event) {
        this.recipe.ingredients.splice(i, 1);
      }
    }
  }

  fileChange(event: any) {
    this.image = event.target.files[0];

    console.log(this.image);
  }
}
