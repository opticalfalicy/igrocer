import { Recipe } from "../data/recipes.interface";

export class CartService {
  private shoppingCart: Recipe[] = [];

  addRecipeToCart(recipe: Recipe) {
    this.shoppingCart.push(recipe);
    console.log(this.shoppingCart);
  }

  getCart() {
    return this.shoppingCart.slice();
  }
}
