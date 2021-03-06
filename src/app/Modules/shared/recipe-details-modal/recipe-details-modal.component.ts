import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from 'src/app/Models/recipe.model';
import { User } from 'src/app/Models/user.model';
import { AuthService } from 'src/app/Services/auth.service';
import { RecipeListService } from '../../../Services/recipe-list.service';
import { addToCalendarModel } from 'src/app/Models/calendar-event.model';
import { CalendarService } from 'src/app/Services/calendar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recipe-details-modal',
  templateUrl: './recipe-details-modal.component.html',
  styleUrls: ['./recipe-details-modal.component.scss'],
})
export class RecipeDetailsModalComponent {
  @Input() recipe: Recipe;
  @Input() isFavoritesPage: boolean;

  @Input() isCalendarPage = false;
  @Input() calendarId?: number;

  @Output() eventDeleted = new EventEmitter();
  user: User;
  placeholderImage: '../../../../assets/images/cutiefood_placeholder.png';

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private recipeListService: RecipeListService,
    private authService: AuthService,
    private calendarService: CalendarService
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    this.user = this.authService.getUser();
  }

  open(content: any) {
    this.modalService.open(content, { size: 'lg', backdrop: true });
  }

  addToFavourites() {
    this.recipeListService.addToFavs(this.recipe, this.user).subscribe();
    this.modalService.dismissAll();
  }

  deleteFromFavourites() {
    this.recipeListService
      .deleteFromFavs(this.user.id, this.recipe.id)
      .subscribe();
    this.modalService.dismissAll();
  }

  get recipeImageOrPlaceholder(): string {
    if (this.recipe.picture === 'default recipe picture') {
      return '../../../../assets/images/cutiefood_placeholder.png';
    }
    return `${environment.imageUrl}${this.recipe.picture}`;
  }

  addToCalendar(date: string) {
    const newEvent: addToCalendarModel = {
      user: this.user,
      recipe: this.recipe,
      date: date,
    };
    this.calendarService.addNewCalendarEvent(newEvent).subscribe(
      () => {},
      (err: HttpErrorResponse) => alert(err.error.message)
    );
  }

  deleteFromCalendar() {
    this.calendarService.deleteCalendarEvent(this.calendarId).subscribe(() => {
      this.eventDeleted.emit();
    });
    this.modalService.dismissAll();
  }
}
