import { Recipe } from 'src/app/Models/recipe.model';
import {MOCK_INGREDIENT_IDS, MOCK_INGREDIENTS, MOCK_INGREDIENTS_FOR_MOCK_RECIPES} from './mock-ingredients';
import {MOCK_USERS} from "./mock-users";

export const MOCK_RECIPE_LIST: Recipe[] = [
  {
    id: 1,
    name: 'Teszt 1',
    ingredients: MOCK_INGREDIENT_IDS,
    process:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a feugiat sapien. Integer elementum vulputate lacinia. Sed leo magna, condimentum a elementum sed, sodales vel elit. Maecenas in consequat orci. Nulla eu odio laoreet, laoreet felis sit amet, blandit diam. Quisque accumsan leo urna, vel vulputate massa vehicula vitae. Pellentesque fermentum non dolor et gravida. Ut porta dapibus metus vel elementum.',
    image: 'assets/images/pizza.jpg',
    diffLevel: 3,
    uploader: MOCK_USERS[0],
  },
  {
    id: 2,
    name: 'Teszt 2',
    ingredients: MOCK_INGREDIENT_IDS,
    process:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a feugiat sapien. Integer elementum vulputate lacinia. Sed leo magna, condimentum a elementum sed, sodales vel elit. Maecenas in consequat orci. Nulla eu odio laoreet, laoreet felis sit amet, blandit diam. Quisque accumsan leo urna, vel vulputate massa vehicula vitae. Pellentesque fermentum non dolor et gravida. Ut porta dapibus metus vel elementum.',
    image: 'assets/images/pizza.jpg',
    diffLevel: 3,
    uploader: MOCK_USERS[1],
  },
  {
    id: 3,
    name: 'Teszt 3',
    ingredients: MOCK_INGREDIENT_IDS,
    process:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a feugiat sapien. Integer elementum vulputate lacinia. Sed leo magna, condimentum a elementum sed, sodales vel elit. Maecenas in consequat orci. Nulla eu odio laoreet, laoreet felis sit amet, blandit diam. Quisque accumsan leo urna, vel vulputate massa vehicula vitae. Pellentesque fermentum non dolor et gravida. Ut porta dapibus metus vel elementum.',
    image: 'assets/images/pizza.jpg',
    diffLevel: 3,
    uploader: MOCK_USERS[0],
  },
  {
    id: 4,
    name: 'Teszt 4',
    ingredients: MOCK_INGREDIENT_IDS,
    process:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a feugiat sapien. Integer elementum vulputate lacinia. Sed leo magna, condimentum a elementum sed, sodales vel elit. Maecenas in consequat orci. Nulla eu odio laoreet, laoreet felis sit amet, blandit diam. Quisque accumsan leo urna, vel vulputate massa vehicula vitae. Pellentesque fermentum non dolor et gravida. Ut porta dapibus metus vel elementum.',
    image: 'assets/images/pizza.jpg',
    diffLevel: 4,
    uploader: MOCK_USERS[1],
  },
];
