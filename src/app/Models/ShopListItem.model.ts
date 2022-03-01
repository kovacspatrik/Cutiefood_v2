import { Ingredient } from './ingredient.model';
import { User } from './user.model';

export interface ShopListItem {
  user: User;
  ingredient: Ingredient;
}
