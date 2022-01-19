import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-new-recipe',
  templateUrl: './upload-new-recipe.component.html',
  styleUrls: ['./upload-new-recipe.component.scss']
})
export class UploadNewRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  uploadNewRecipe(){
    alert('NEW RECIPE MODAL');
  }
}
