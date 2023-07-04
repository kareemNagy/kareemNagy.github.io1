import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/core/models/product.model";

@Component({
  selector: "app-product-price",
  templateUrl: "./product-price.component.html",
  styleUrls: ["./product-price.component.scss"],
})
export class ProductPriceComponent implements OnInit {
  @Input() product: Product = new Product();
  @Input() editable: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
