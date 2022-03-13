import { Component, Input } from '@angular/core';
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
  @Input() recipes: Recipe[] = [];
}
