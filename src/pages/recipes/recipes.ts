import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Ingredient } from "../../data/recipes.interface";
import recipes from "../../data/recipes";

@Component({
  selector: "page-recipes",
  templateUrl: "recipes.html"
  // providers: [RecipeServiceProvider]
})
export class RecipesPage implements OnInit {
  recipeCollection: {
    title: string;
    instructions: string;
    ingredients: Ingredient[];
  }[];
  // recipesPage = RecipesPage;

  constructor(public navCtrl: NavController, navParams: NavParams) {}

  ngOnInit() {
    this.recipeCollection = recipes;
  }
  // recipeGroup: {
  //   title: string;
  //   instructions: string;
  //   ingredients: Ingredient[];
  // };

  // constructor(public navCtrl: NavController, navParams: NavParams) {}

  // ngOnInit() {
  //   this.recipeGroup = this.navParams.data;
  // }
}
