import { Category } from "./Category";

export class Item
{
    id: Number = 0;
    name: String = "";
    description: String = "";
    amount: Number = 0;
    category: Category = Category.homeAppliances;
    imgPath: String = "";

    public constructor(){}
}
