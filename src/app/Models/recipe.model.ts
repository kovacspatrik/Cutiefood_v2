import { Ingredient } from "./ingredient.model";
import {User} from "./user.model";

export class Recipe {
    id: number;
    name: string;
    uploader: User;
    ingredients: number[];
    process: string;
    diffLevel: number;
    image?: string;
}
