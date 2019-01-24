import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-recipes",
  templateUrl: "recipes.html"
  // providers: [RecipeServiceProvider]
})
export class RecipesPage {
  constructor(public navCtrl: NavController) {}
}
