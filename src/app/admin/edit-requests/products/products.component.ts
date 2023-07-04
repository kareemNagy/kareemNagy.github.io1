import { Project } from "src/app/core/models/project.model";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/core/services/user.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-products-request",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsRequestComponent implements OnInit {
  @Input() project!: any;
  @Input() editable!: boolean;
  currentRole = "";
  projectId!: number;
  host = environment.hostUrl;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.currentRole = this.userService.getUserRole();
  }

  ngOnInit(): void {}
}
