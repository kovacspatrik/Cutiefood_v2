export interface Ingredient {
  id: number;
  name: string;
}

export interface IngredientWithQuantity {
  ingredient: Ingredient;
  quantity: string;
}
