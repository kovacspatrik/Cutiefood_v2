import { Ingredient } from "./ingredient.model";

export interface Recipe {
    id: number;
    name: string;
    uploader: string;
    ingredients: Ingredient[];
    process: string[];
    diffLevel: number;
    image?: string;
}