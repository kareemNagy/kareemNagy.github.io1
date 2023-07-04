import { Component, Input, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-project-products",
  templateUrl: "./project-products.component.html",
  styleUrls: ["./project-products.component.scss"],
})
export class ProjectProductsComponent implements OnInit {
  @Input() products: any[] = [];
  host = environment.hostUrl;

  constructor() {}

  ngOnInit(): void {}
}
