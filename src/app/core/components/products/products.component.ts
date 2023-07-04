import { ProductService } from "src/app/core/services/product.service";
import { Project } from "src/app/core/models/project.model";
import { Product } from "./../../models/product.model";
import { Component, Input, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { ActivatedRoute } from "@angular/router";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  @Input() project!: Project;
  @Input() editable!: boolean;
  currentRole = "";
  projectId!: number;
  host = environment.hostUrl;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private productService: ProductService
  ) {
    this.route.params.subscribe(
      (params) => (this.projectId = Number(params["id"]))
    );
    this.currentRole = this.userService.getUserRole();
  }

  ngOnInit(): void {
    console.log(this.project.products);
  }

  deleteProduct(product: any, index: number) {
    this.productService.deleteProduct(product.Id).subscribe();
    this.project.products.splice(index, 1);
  }
}
