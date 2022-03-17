import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
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

  @Output() recipeUpdated = new EventEmitter<any>();

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

  hasIngredient(item: Ingredient): boolean {
    let hasIngredient = false;
    this.recipe.ingredients.forEach((ingredient) => {
      if (ingredient.ingredient.name === item.name) {
        hasIngredient = true;
      }
    });
    return hasIngredient;
  }

  onSave() {
    this.recipe.user = this.auth.getUser();
    if (this.isEdit) {
      this.recipeListService.editRecipe(this.recipe).subscribe();
    } else {
      this.recipeListService.uploadRecipe(this.recipe).subscribe();
    }
    this.recipeUpdated.emit();
    this.modalService.dismissAll();
  }

  addIngredient(item: Ingredient) {
    if (!this.hasIngredient(item)) {
      const data: IngredientWithQuantity = {
        quantity: '',
        ingredient: item,
      };
      this.recipe.ingredients.push(data);
    } else {
      alert(`A(z) ${item.name} már szerepel a listában!`);
    }
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
