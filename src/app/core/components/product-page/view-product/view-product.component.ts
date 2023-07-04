import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/core/models/product.model";
import { ProductService } from "src/app/core/services/product.service";

@Component({
  selector: "app-view-product",
  templateUrl: "./view-product.component.html",
  styleUrls: ["./view-product.component.scss"],
})
export class ViewProductComponent implements OnInit {
  productId: number = 0;
  productInfo!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.params.subscribe((params) => (this.productId = params["id"]));
  }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(): void {
    this.productService.getProductById(this.productId).subscribe((product) => {
      this.productInfo = product;
    });
  }
}
