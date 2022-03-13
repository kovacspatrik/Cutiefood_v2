import { Recipe } from './recipe.model';
import { User } from './user.model';

export interface CalendarEvent {
  id: number;
  date: string;
  recipe: Recipe;
}

export interface addToCalendarModel {
  user: User;
  recipe: Recipe;
  date: string;
}
