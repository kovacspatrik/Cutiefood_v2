import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarEvent } from 'src/app/Models/calendar-event.model';
import { Recipe } from 'src/app/Models/recipe.model';
import { WeekDays } from 'src/app/Models/weekDays.model';
import { MOCK_RECIPE_LIST } from '../../../Services/mock-files/mock-recipes';

@Component({
  selector: 'app-day-cell',
  templateUrl: './day-cell.component.html',
  styleUrls: ['./day-cell.component.scss'],
})
export class DayCellComponent {
  @Input() day: WeekDays;
  @Input() recipes: CalendarEvent[] = [];

  @Output() eventDeleted = new EventEmitter();

  emitEventDeleted() {
    this.eventDeleted.emit();
  }
}
