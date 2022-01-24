import { Component, OnInit } from '@angular/core';
import { MOCK_INGREDIENTS } from "../../../Services/mock-files/mock-ingredients";
import {Ingredient} from "../../../Models/ingredient.model";
import {Observable, of} from "rxjs";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-whats-home',
  templateUrl: './whats-home.component.html',
  styleUrls: ['./whats-home.component.scss']
})
export class WhatsHomeComponent implements OnInit {


  ingredients = MOCK_INGREDIENTS;
  selectedIngredients= new Array<string>(1);

  constructor() {}

  ngOnInit(): void {
  }

  test() {
    this.selectedIngredients.push(null);
    console.log(this.selectedIngredients);
  }

}
