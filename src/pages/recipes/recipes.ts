import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Ingredient, Instruction } from "../../data/recipes.interface";
import recipes from "../../data/recipes";
import { RecipePage } from "./recipe/recipe";
import { RestProvider } from "../../providers/rest/rest";

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

  recipes: any;

  // recipesPage = RecipesPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rP: RestProvider
  ) {
    this.getRecipes();
  }
  // onLoadRecipe(title: string, instructions: string) {
  //   this.navCtrl.push(RecipePage, { title: title, instructions: instructions });
  // }
  onLoadRecipe(id: any) {
    // this.navCtrl.push(RecipePage, { recipe: this.recipeCollection });
    console.log(id);
    let recipes = this.recipes;
    for (let i = 0; i < recipes.length; i++) {
      // console.log(recipes[i]._id);
      if (recipes[i]._id == id) {
        console.log("success", recipes[i]);

        this.navCtrl.push(RecipePage, { recipe: recipes[i] });
      }
      // this.navCtrl.push(RecipePage, { recipe: this.recipes });
      // else {
      //   alert("Theres been a mistake...");
      // }
    }
  }
  recipesPage = RecipesPage;

  ngOnInit() {
    // this.recipeCollection = recipes;
    // recipes = this.recipes;
    // console.log("init", this.recipeCollection);
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

  getRecipes() {
    this.rP.getRecipes().then(data => {
      this.recipes = data;
      console.log(this.recipes);
    });
  }
}
