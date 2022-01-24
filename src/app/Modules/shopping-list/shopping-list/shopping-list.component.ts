import {Component, OnInit, ViewChild} from '@angular/core';
import { MOCK_INGREDIENTS } from "../../../Services/mock-files/mock-ingredients";
import {MatSelectionList} from "@angular/material/list";
import {Ingredient} from "../../../Models/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  @ViewChild('shopList') selectionList: MatSelectionList

  shoppingList = MOCK_INGREDIENTS;

  selectedOptions: string[];
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

}
