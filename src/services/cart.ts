import { Ingredient } from "../data/recipes.interface";

export class CartService {
  private shoppingCart: Ingredient[] = [];

  addRecipeToCart(recipe: Ingredient) {
    this.shoppingCart.push(recipe);
    console.log(this.shoppingCart);
  }

  removeItemFromCart(item: Ingredient) {
    const position = this.shoppingCart.findIndex((ingredient: Ingredient) => {
      return (ingredient.id = item.id);
    });
    console.log(position);
    this.shoppingCart.splice(position, 1);
  }

  getCart() {
    return this.shoppingCart.slice();
  }

  clearCart() {
    return this.shoppingCart.splice(0, this.shoppingCart.length);
  }
}
