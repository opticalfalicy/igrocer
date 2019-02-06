import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { RecipePage } from "./recipe/recipe";
import { RestProvider } from "../../providers/rest/rest";

@Component({
  selector: "page-recipes",
  templateUrl: "recipes.html"
})
export class RecipesPage implements OnInit {
  recipeCollection: {
    title: string;
    instructions: Instruction[];
    ingredients: Ingredient[];
  }[];

  recipes: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rP: RestProvider
  ) {
    this.getRecipes();
  }

  onLoadRecipe(id: any) {
    console.log(id);
    let recipes = this.recipes;
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i]._id == id) {
        this.navCtrl.push(RecipePage, { recipe: recipes[i] });
      }
    }
  }
  recipesPage = RecipesPage;

  ngOnInit() {}

  getRecipes() {
    this.rP.getRecipes().then(data => {
      this.recipes = data;
    });
  }
}
