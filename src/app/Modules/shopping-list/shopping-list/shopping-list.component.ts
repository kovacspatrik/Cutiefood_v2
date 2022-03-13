import { Component, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { Ingredient } from '../../../Models/ingredient.model';
import { MatSelect } from '@angular/material/select';
import { IngredientService } from 'src/app/Services/ingredient.service';
import { ShoppingListService } from 'src/app/Services/shopping-list.service';
import { AuthService } from 'src/app/Services/auth.service';
import { ShopListItem } from 'src/app/Models/ShopListItem.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  @ViewChild('shopList') selectionList: MatSelectionList;
  @ViewChild('select') selectDropdown: MatSelect;
  user = this.authService.getUser();
  ingredients: Ingredient[];
  shoppingList: Ingredient[] = [];

  selectedOptions: string[];

  constructor(
    private ingredientService: IngredientService,
    private shopListService: ShoppingListService,
    private authService: AuthService
  ) {
    this.loadIngredientList();

    this.loadShoppingList();
  }

  loadIngredientList() {
    this.ingredientService.getIngredients().subscribe((res) => {
      this.ingredients = res;
    });
  }

  loadShoppingList() {
    this.shopListService
      .getShoppingListByUserId(this.user.id)
      .subscribe((res) => {
        this.shoppingList = res;
      });
  }

  deleteItemFromList(item: Ingredient) {
    this.shopListService
      .deleteShoppingListItem(this.user.id, item.id)
      .subscribe(() => {
        setTimeout(() => {
          this.loadShoppingList();
        }, 100);
      });
  }

  addToCart(item: Ingredient) {
    if (this.shoppingList.includes(item)) {
      console.log('Ez a termék már szerepel a listán!');
    } else {
      const data: ShopListItem = {
        user: this.user,
        ingredient: item,
      };
      this.shopListService.createShoppingListItem(data).subscribe(() => {
        this.selectDropdown.value = [];
        this.loadShoppingList();
      });
    }
  }

  clearShoppingList() {
    this.shopListService.clearUserShoppingList(this.user.id).subscribe(() => {
      this.loadShoppingList();
    });
  }
}
