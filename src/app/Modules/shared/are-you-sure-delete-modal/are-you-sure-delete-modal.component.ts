import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { RecipeListService } from '../../../Services/recipe-list.service';

@Component({
  selector: 'app-are-you-sure-delete-modal',
  templateUrl: './are-you-sure-delete-modal.component.html',
  styleUrls: ['./are-you-sure-delete-modal.component.scss'],
})
export class AreYouSureDeleteModalComponent implements OnInit {
  @Input() recipeId: number;
  @ViewChild('content') modal: ElementRef;
  @Output() recipeDeleted = new EventEmitter<any>();

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private recipeListService: RecipeListService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content, { size: 'sm', backdrop: true });
  }

  ngOnInit(): void {}

  deleteRecipe() {
    this.recipeListService.deleteRecipe(this.recipeId).subscribe(() => {
      this.recipeDeleted.emit();
    });
    this.modalService.dismissAll();
  }
}
