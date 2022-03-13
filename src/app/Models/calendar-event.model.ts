import { Recipe } from './recipe.model';

export interface CalendarEvent {
  id: number;
  date: string;
  recipe: Recipe;
}
