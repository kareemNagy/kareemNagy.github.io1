import { Store } from "../../models/store.model";
import { StoreCreation } from "../../models/add-branch.model";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Branch } from "../../models/branch.model";

@Component({
  selector: "app-branch-info",
  templateUrl: "./branch-info.component.html",
  styleUrls: ["./branch-info.component.scss"],
})
export class BranchInfoComponent implements OnInit {
  @Input() branchInfo!: Branch;
  @Input() nameTitle: string = "";
  @Input() editable!: boolean;

  storeInfo!: Store;

  newStoreInfo!: StoreCreation;

  constructor() {}

  ngOnInit(): void {
    console.log(this.branchInfo);
  }

  updateBranchInfo(): void {}
}
