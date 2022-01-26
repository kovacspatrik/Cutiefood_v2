import {Component, OnInit, ViewChild} from '@angular/core';
import { MOCK_INGREDIENTS } from "../../../Services/mock-files/mock-ingredients";
import {MatSelectionList} from "@angular/material/list";
import {Ingredient} from "../../../Models/ingredient.model";
import {MatSelect} from "@angular/material/select";
import {of} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  @ViewChild('shopList') selectionList: MatSelectionList
  @ViewChild('select') selectDropdown: MatSelect;
  ingredients = MOCK_INGREDIENTS;
  shoppingList: Ingredient[] = [];

  selectedOptions: string[];
  allSelected = false;

  constructor() { }

  ngOnInit(): void {
  }

  deleteSelected() {
    if (this.selectedOptions) {
      this.selectedOptions.forEach((element) => {
        const itemId = this.shoppingList.find((res) => res.name === element)
        this.shoppingList = this.shoppingList.filter (element => element != itemId);
      })
    }
  }

  addToCart(itemId: any) {
    const elementToAdd = this.ingredients[itemId]
    if (this.shoppingList.includes(elementToAdd)){
      alert('Ez a termék már szerepel a listán!');
    } else {
      this.shoppingList.push(elementToAdd);
      this.selectDropdown.value = [];
    }
  }

  selectAll(){
    if(this.allSelected) {
      this.selectionList.deselectAll();
      this.allSelected = !this.allSelected;
    }else {
      this.selectionList.selectAll();
      this.allSelected = !this.allSelected;
    }
  }
}
