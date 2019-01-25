import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Ingredient } from "../../../data/recipes.interface";
import recipes from "../../../data/recipes";
import { CartService } from "../../../services/cart";

@Component({
  selector: "page-recipe",
  templateUrl: "recipe.html"
  // providers: [RecipeServiceProvider]
})
export class RecipePage implements OnInit {
  recipeGroup: {
    title: string;
    instructions: string;
    ingredients: Ingredient[];
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cart: CartService
  ) {}

  ngOnInit() {
    this.recipeGroup = this.navParams.data;
    this.avocadoToast = this.recipeGroup.recipe[0];
    // console.log(this.recipeGroup.recipe[0]);
  }

  onAddToCart(selectedItem: Recipe) {
    this.cart.addRecipeToCart(selectedItem);
  }
}
