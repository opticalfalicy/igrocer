import { Component } from "@angular/core";
import { RecipesPage } from "../recipes/recipes";
import { CartPage } from "../cart/cart";

@Component({
  selector: "page-tabs",
  template: `
    <ion-tabs>
      <ion-tab
        [root]="recipesPage"
        tabTitle="Recipes"
        style="color: black;"
        tabIcon="book"
      ></ion-tab>
      <ion-tab [root]="cartPage" tabIcon="cart"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  recipesPage = RecipesPage;
  cartPage = CartPage;
}
