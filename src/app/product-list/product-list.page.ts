import { Component, OnInit } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.page.html",
  styleUrls: ["./product-list.page.scss"],
})
export class ProductListPage implements OnInit {
  constructor(public actionSheetController: ActionSheetController) {}

  categoryTitle = "Fashion";
  ngOnInit() {}

  async doFilter() {
    const actionSheet = await this.actionSheetController.create({
      header: "Sort by",
      buttons: [
        {
          text: "Featured Products",
          icon: "funnel-outline",
          handler: () => {
            console.log("Sort by: Featured");
          },
        },
        {
          text: "Price High to Low",
          icon: "trending-down-outline",
          handler: () => {
            console.log("Sort by: Price High to Low");
          },
        },
        {
          text: "Price Low to High",
          icon: "trending-up-outline",
          handler: () => {
            console.log("Sort by: Price Low to High");
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancelled");
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
