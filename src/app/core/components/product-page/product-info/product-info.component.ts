import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/core/models/product.model";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-product-info",
  templateUrl: "./product-info.component.html",
  styleUrls: ["./product-info.component.scss"],
})
export class ProductInfoComponent implements OnInit {
  @Input() product!: Product;
  @Input() editable: boolean = false;
  host = environment.hostUrl;

  constructor() {}

  ngOnInit(): void {
    console.log(this.product);
  }
}
