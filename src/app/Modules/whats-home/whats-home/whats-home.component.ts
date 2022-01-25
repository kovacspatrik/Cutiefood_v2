import { Component } from '@angular/core';
import { MOCK_INGREDIENTS } from "../../../Services/mock-files/mock-ingredients";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-whats-home',
  templateUrl: './whats-home.component.html',
  styleUrls: ['./whats-home.component.scss']
})
export class WhatsHomeComponent {
  mock_ingredients = MOCK_INGREDIENTS;
  selectedIngredients= new Array<string>(1);

  form = this.fb.group({
    ingredients: this.fb.array([])
  })

  constructor(private fb: FormBuilder) {}

  get ingredients() {
    return this.form.controls["ingredients"] as FormArray
  }

  addRow() {
    const ingredientControl = this.fb.group({
      name: '',
    });
    this.ingredients.push(ingredientControl);
  }

  deleteRow(lessonIndex: number) {
    this.ingredients.removeAt(lessonIndex);
  }

  logValues() {
    console.log(this.form.get("ingredients").value);
  }
}
