import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Ingredient } from "../../../data/recipes.interface";

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

  constructor(public navCtrl: NavController, navParams: NavParams) {}

  ngOnInit() {
    this.recipeGroup = this.navParams.data;
  }
}
