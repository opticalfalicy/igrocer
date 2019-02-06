import { Component } from "@angular/core";
import { RecipesPage } from "../recipes/recipes";

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
    </ion-tabs>
  `
})
export class TabsPage {
  recipesPage = RecipesPage;
}
