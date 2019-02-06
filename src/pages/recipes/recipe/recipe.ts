import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-recipe",
  templateUrl: "recipe.html"
})
export class RecipePage implements OnInit {
  recipe: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit() {
    this.recipe = this.navParams.data.recipe;
  }
}
