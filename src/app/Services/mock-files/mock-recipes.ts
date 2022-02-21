import { Recipe } from 'src/app/Models/recipe.model';
import {
  MOCK_INGREDIENT_IDS,
  MOCK_INGREDIENTS,
  MOCK_INGREDIENTS_FOR_MOCK_RECIPES,
} from './mock-ingredients';
import { MOCK_USERS } from './mock-users';

export const MOCK_RECIPE_LIST: Recipe[] = [
  {
    id: 1,
    name: 'Teszt 1',
    ingredients: [
      {
        recipeId: 19,
        ingredientId: 3,
        quantity: 'asdf',
        ingredient: {
          id: 3,
          name: 'három',
        },
      },
      {
        recipeId: 19,
        ingredientId: 4,
        quantity: 'asdf',
        ingredient: {
          id: 4,
          name: 'négy',
        },
      },
    ],
    process:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a feugiat sapien. Integer elementum vulputate lacinia. Sed leo magna, condimentum a elementum sed, sodales vel elit. Maecenas in consequat orci. Nulla eu odio laoreet, laoreet felis sit amet, blandit diam. Quisque accumsan leo urna, vel vulputate massa vehicula vitae. Pellentesque fermentum non dolor et gravida. Ut porta dapibus metus vel elementum.',
    picture: 'assets/images/pizza.jpg',
    diffLevel: 3,
    user: MOCK_USERS[0],
  },
  {
    id: 2,
    name: 'Teszt 2',
    ingredients: [
      {
        recipeId: 19,
        ingredientId: 3,
        quantity: 'asdf',
        ingredient: {
          id: 3,
          name: 'három',
        },
      },
      {
        recipeId: 19,
        ingredientId: 4,
        quantity: 'asdf',
        ingredient: {
          id: 4,
          name: 'négy',
        },
      },
    ],
    process:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a feugiat sapien. Integer elementum vulputate lacinia. Sed leo magna, condimentum a elementum sed, sodales vel elit. Maecenas in consequat orci. Nulla eu odio laoreet, laoreet felis sit amet, blandit diam. Quisque accumsan leo urna, vel vulputate massa vehicula vitae. Pellentesque fermentum non dolor et gravida. Ut porta dapibus metus vel elementum.',
    picture: 'assets/images/pizza.jpg',
    diffLevel: 3,
    user: MOCK_USERS[1],
  },
  {
    id: 3,
    name: 'Teszt 3',
    ingredients: [
      {
        recipeId: 19,
        ingredientId: 3,
        quantity: 'asdf',
        ingredient: {
          id: 3,
          name: 'három',
        },
      },
      {
        recipeId: 19,
        ingredientId: 4,
        quantity: 'asdf',
        ingredient: {
          id: 4,
          name: 'négy',
        },
      },
    ],
    process:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a feugiat sapien. Integer elementum vulputate lacinia. Sed leo magna, condimentum a elementum sed, sodales vel elit. Maecenas in consequat orci. Nulla eu odio laoreet, laoreet felis sit amet, blandit diam. Quisque accumsan leo urna, vel vulputate massa vehicula vitae. Pellentesque fermentum non dolor et gravida. Ut porta dapibus metus vel elementum.',
    picture: 'assets/images/pizza.jpg',
    diffLevel: 3,
    user: MOCK_USERS[0],
  },
  {
    id: 4,
    name: 'Teszt 4',
    ingredients: [
      {
        recipeId: 19,
        ingredientId: 3,
        quantity: 'asdf',
        ingredient: {
          id: 3,
          name: 'három',
        },
      },
      {
        recipeId: 19,
        ingredientId: 4,
        quantity: 'asdf',
        ingredient: {
          id: 4,
          name: 'négy',
        },
      },
    ],
    process:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a feugiat sapien. Integer elementum vulputate lacinia. Sed leo magna, condimentum a elementum sed, sodales vel elit. Maecenas in consequat orci. Nulla eu odio laoreet, laoreet felis sit amet, blandit diam. Quisque accumsan leo urna, vel vulputate massa vehicula vitae. Pellentesque fermentum non dolor et gravida. Ut porta dapibus metus vel elementum.',
    picture: 'assets/images/pizza.jpg',
    diffLevel: 4,
    user: MOCK_USERS[1],
  },
];
