import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe.model';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {MOCK_INGREDIENTS_FOR_MOCK_RECIPES} from "../../../Services/mock-files/mock-ingredients";
import {MOCK_USERS} from "../../../Services/mock-files/mock-users";

@Component({
  selector: 'app-upload-edit-recipe-modal',
  templateUrl: './upload-edit-recipe-modal.component.html',
  styleUrls: ['./upload-edit-recipe-modal.component.scss']
})
export class UploadEditRecipeModalComponent {
  @Input() isEdit: boolean = false;
  @Input() recipe?: Recipe

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content, { size: 'lg', backdrop: true });
  }

  ngOnInit() {
    if (!this.isEdit) {
      this.recipe = new Recipe();
    }
  }

  onSave() {
    console.log(this.recipe);
  }
}
