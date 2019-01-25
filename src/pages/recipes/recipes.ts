import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Ingredient, Instruction } from "../../data/recipes.interface";
import recipes from "../../data/recipes";
import { RecipePage } from "./recipe/recipe";

@Component({
  selector: "page-recipes",
  templateUrl: "recipes.html"
  // providers: [RecipeServiceProvider]
})
export class RecipesPage implements OnInit {
  recipeCollection: {
    title: string;
    instructions: Instruction[];
    ingredients: Ingredient[];
  }[];
  // recipesPage = RecipesPage;

  constructor(public navCtrl: NavController, navParams: NavParams) {}
  // onLoadRecipe(title: string, instructions: string) {
  //   this.navCtrl.push(RecipePage, { title: title, instructions: instructions });
  // }
  onLoadRecipe(recipe: Object) {
    this.navCtrl.push(RecipePage, { recipe: this.recipeCollection });
  }
  recipesPage = RecipesPage;

  ngOnInit() {
    this.recipeCollection = recipes;
    console.log("init", this.recipeCollection);
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
