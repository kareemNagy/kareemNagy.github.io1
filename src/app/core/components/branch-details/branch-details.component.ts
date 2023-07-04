import { Branch } from './../../models/branch.model';
import { Store } from "../../models/store.model";
import { StoreCreation } from "../../models/add-branch.model";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BranchService } from "../../services/branch.service";

@Component({
  selector: "app-branch-details",
  templateUrl: "./branch-details.component.html",
  styleUrls: ["./branch-details.component.scss"],
})
export class BranchDetailsComponent implements OnInit {
  branchId!: number;
  branchDetails!: Branch;

  constructor(
    private route: ActivatedRoute,
    private branchService: BranchService
  ) {
    this.route.params.subscribe((params) => (this.branchId = params["id"]));
  }

  ngOnInit(): void {
    this.getBranchById();
  }

  getBranchById(): void {
    this.branchService.getBranchById(this.branchId).subscribe((branch) => {
      this.branchDetails = branch;
    });
  }
}
