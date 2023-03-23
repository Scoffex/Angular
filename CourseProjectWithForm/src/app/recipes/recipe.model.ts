import { Ingredients } from "../shareFolder/ingredients.model";

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredients[];

   public constructor(name: string, description:string, imagePath:string, ingredients: Ingredients[]){
        this.name=name;
        this.description=description;
        this.imagePath=imagePath;
        this.ingredients = ingredients;
    }
   
}