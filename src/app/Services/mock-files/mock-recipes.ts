import { Recipe } from 'src/app/Models/recipe.model';
import {
  MOCK_INGREDIENT_IDS,
  MOCK_INGREDIENTS,
  MOCK_INGREDIENTS_FOR_MOCK_RECIPES,
} from './mock-ingredients';
import { MOCK_USERS } from './mock-users';

export const MOCK_RECIPE_LIST: Recipe[] = [
  {
    name: 'Próba',
    picture:
      'https://cdn.portfolio.hu/articles/images-lg/m/e/g/megvadulsz-ha-meglatod-mennyi-fagyasztott-pizza-fogyott-1-ev-alatt-nalunk-295599.jpg',
    ingredients: [],
    process: 'process',
    diffLevel: 2,
  },
];
