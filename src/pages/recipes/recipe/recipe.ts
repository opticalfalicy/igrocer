import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Ingredient, Instruction } from "../../../data/recipes.interface";
import recipes from "../../../data/recipes";
import { CartService } from "../../../services/cart";

@Component({
  selector: "page-recipe",
  templateUrl: "recipe.html"
  // providers: [RecipeServiceProvider]
})
export class RecipePage implements OnInit {
  // recipeGroup: {
  //   title: string;
  //   instructions: Instruction[];
  //   ingredients: Ingredient[];
  // };

  recipe: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cartServ: CartService
  ) {}

  ngOnInit() {
    // this.recipeGroup = this.navParams.data;
    // console.log(this.recipeGroup);
    // this.avocadoToast = this.recipeGroup.recipe[0];
    this.recipe = this.navParams.data.recipe;
    console.log(this.recipe.title);
  }

  onAddToCart(selectedItem: Ingredient) {
    this.cartServ.addRecipeToCart(selectedItem);
  }
}
