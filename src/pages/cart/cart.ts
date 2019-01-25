import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Ingredient } from "../../data/recipes.interface";
import { CartService } from "../../services/cart";

@Component({
  selector: "page-cart",
  templateUrl: "cart.html"
})
export class CartPage {
  items: Ingredient[];
  constructor(
    public navCtrl: NavController,
    public cartServ: CartService,
    public navParams: NavParams
  ) {}

  ionViewWillEnter() {
    this.items = this.cartServ.getCart();
    console.log(this.items);
  }

  onRemoveIngredient(item: Ingredient) {
    this.cartServ.removeItemFromCart(item);
    this.navCtrl.goToRoot();
    console.log(this.items);
  }

  onClearCart() {
    this.cartServ.clearCart();
    this.navCtrl.goToRoot();
  }
}
