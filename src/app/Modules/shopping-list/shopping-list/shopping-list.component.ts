import { Component, OnInit, ViewChild } from '@angular/core';
import { MOCK_INGREDIENTS } from '../../../Services/mock-files/mock-ingredients';
import { MatSelectionList } from '@angular/material/list';
import { Ingredient } from '../../../Models/ingredient.model';
import { MatSelect } from '@angular/material/select';
import { of } from 'rxjs';
import { IngredientService } from 'src/app/Services/ingredient.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
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

  ngOnInit(): void {}

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

  addToCart(itemId: number) {
    console.log(
      this.ingredients.find((res) => {
        res.id === itemId;
      })
    );
    //console.log(elementToAdd);
    // if (this.shoppingList.includes(elementToAdd)) {
    //   alert('Ez a termék már szerepel a listán!');
    // } else {
    //   this.shoppingList.push(elementToAdd);
    //   this.selectDropdown.value = [];
    // }
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
}
