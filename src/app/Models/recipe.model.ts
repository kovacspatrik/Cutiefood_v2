import { Ingredient } from "./ingredient.model";
import {User} from "./user.model";

export interface Recipe {
    id: number;
    name: string;
    uploader: User;
    ingredients: Ingredient[];
    process: string[];
    diffLevel: number;
    image?: string;
}
