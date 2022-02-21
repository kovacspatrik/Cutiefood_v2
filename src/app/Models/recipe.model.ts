import { Ingredient, IngredientWithQuantity } from './ingredient.model';
import { User } from './user.model';

export class Recipe {
  id?: number;
  name: string;
  user?: User;
  ingredients: IngredientWithQuantity[];
  process: string;
  diffLevel: number;
  picture?: string;
}
