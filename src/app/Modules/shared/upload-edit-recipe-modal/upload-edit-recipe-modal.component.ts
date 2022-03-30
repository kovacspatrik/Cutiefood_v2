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
import { ImageModel } from 'src/app/Models/image.model';
import { placeholderImage } from 'src/app/Constants/placeholderImage';

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
  image: ImageModel = {
    name: '',
    data: '',
  };

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
      this.uploadImage();
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

  uploadImage() {
    if (this.image.data === '') {
      this.image.data = placeholderImage;
    }
    this.recipeListService.uploadRecipeImage(this.image).subscribe(() => {
      this.image = {
        name: '',
        data: '',
      };
    });
  }

  fileChange(event: any) {
    const uploadedData = event.target.files[0];

    if (uploadedData) {
      const random = Math.floor(999 + Math.random() * 9000);
      this.recipe.picture = `/storage/${random}_${uploadedData.name}`;
      this.image.name = `${random}_${uploadedData.name}`;
      const reader = new FileReader();
      reader.readAsDataURL(uploadedData);
      reader.onload = () => {
        this.image.data = reader.result as string;
        console.log(event.target.files[0].name);
      };
    }
  }
}
