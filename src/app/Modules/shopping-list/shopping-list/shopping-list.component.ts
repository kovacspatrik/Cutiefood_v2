import { Component, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { Ingredient } from '../../../Models/ingredient.model';
import { MatSelect } from '@angular/material/select';
import { IngredientService } from 'src/app/Services/ingredient.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  @ViewChild('shopList') selectionList: MatSelectionList;
  @ViewChild('select') selectDropdown: MatSelect;
  ingredients: Ingredient[];
  shoppingList: Ingredient[] = [];

  selectedOptions: string[];
  allSelected = false;

  constructor(private ingredientService: IngredientService) {
    this.ingredientService.getIngredients().subscribe((res) => {
      this.ingredients = res;
      console.log(this.ingredients);
    });
  }

  deleteSelected() {
    if (this.selectedOptions) {
      this.selectedOptions.forEach((element) => {
        const itemId = this.shoppingList.find((res) => res.name === element);
        this.shoppingList = this.shoppingList.filter(
          (element) => element != itemId
        );
      });
    }
  }

  addToCart(event: any) {
    if (this.shoppingList.includes(event)) {
      alert('Ez a termék már szerepel a listán!');
      this.selectDropdown.value = [];
    } else {
      this.shoppingList.push(event);
      this.selectDropdown.value = [];
    }
  }

  selectAll() {
    if (this.allSelected) {
      this.selectionList.deselectAll();
      this.allSelected = !this.allSelected;
    } else {
      this.selectionList.selectAll();
      this.allSelected = !this.allSelected;
    }
  }

  saveShoppingList() {
    alert('SAVE SHOPPING LIST');
  }
}
