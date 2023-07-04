import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/core/models/product.model";

@Component({
  selector: "app-product-delivery-options",
  templateUrl: "./product-delivery-options.component.html",
  styleUrls: ["./product-delivery-options.component.scss"],
})
export class ProductDeliveryOptionsComponent implements OnInit {
  @Input() product: Product = new Product();
  constructor() {}

  ngOnInit(): void {}
}
