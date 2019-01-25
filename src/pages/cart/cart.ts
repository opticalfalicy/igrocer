import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Recipe } from "../../data/recipes.interface";
import { CartService } from "../../services/cart";

@Component({
  selector: "page-cart",
  templateUrl: "cart.html"
})
export class CartPage {
  items: Recipe[];
  constructor(public navCtrl: NavController, public cartServ: CartService) {}

  // ionViewWillEnter() {
  //   this.items = this.cart.getCart();
  // }
}
