import { BranchUpdateCreation } from "./../../models/branch-update.model";
import { Request } from "./../../models/request.model";
import { UserService } from "./../../services/user.service";
import { BranchService } from "src/app/core/services/branch.service";
import { Component, OnInit } from "@angular/core";
import { StoreCreation } from "../../models/add-branch.model";
import { Branch } from "../../models/branch.model";
import { RequestService } from "../../services/request.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-add-branch",
  templateUrl: "./add-branch.component.html",
  styleUrls: ["./add-branch.component.scss"],
})
export class AddBranchComponent implements OnInit {
  newBranch: Branch = new Branch();
  address: string = "";
  projectId!: number;
  requestAvailable = false;
  branchRequestUpdate = new BranchUpdateCreation();
  currentRequest: Request = new Request();
  constructor(
    private route: ActivatedRoute,
    private branchService: BranchService,
    private userService: UserService,
    private requestService: RequestService
  ) {
    this.route.params.subscribe(
      (params) => (this.projectId = params["projectId"])
    );
  }

  ngOnInit(): void {
    this.getCurrentRequest();
  }

  getCurrentRequest() {
    this.requestService
      .getProjectOpenRequests(this.projectId)
      .subscribe((response: any) => {
        if (response.Rows.length == 0) {
          this.requestAvailable = false;
        } else {
          this.currentRequest = response.Rows[0];
          this.requestAvailable = true;
        }
      });
  }

  setAddress(address: string) {
    console.log(address);
    this.address = address;
    this.newBranch.longitude = this.address.split(",")[1];
    this.newBranch.latitude = this.address.split(",")[0];
    console.log(this.newBranch);
  }

  saveChanges() {
    this.validateBranch();
    this.newBranch.longitude = this.address.split(",")[1];
    this.newBranch.latitude = this.address.split(",")[0];
    this.newBranch.projectNameEn = this.newBranch.projectNameAr;
    if (this.userService.getUserRole() == "ADMIN") {
      this.newBranch.isMainStore = true;
      this.newBranch.projectId = this.projectId;
      this.branchService.addBranch(this.newBranch).subscribe((response) => {
        window.location.href = "/admin/projects/" + this.projectId;
        console.log(response);
      });
    }
    if (this.userService.getUserRole() == "CLIENT") {
      this.newBranch.isMainStore = false;
      this.newBranch.projectId = 16646;
      this.newBranch.Id = null;
      if (this.requestAvailable) {
        this.createBranchRequest();
      } else {
        this.createUpdateRequest();
      }
    }
  }

  createUpdateRequest() {
    this.requestService
      .createProjectUpdateRequest(this.projectId)
      .subscribe((response: any) => {
        this.currentRequest = response;
        this.createBranchRequest();
      });
  }

  createBranchRequest(): void {
    this.branchRequestUpdate.longitude = this.newBranch.longitude;
    this.branchRequestUpdate.latitude = this.newBranch.latitude;
    this.branchRequestUpdate.nameAr = this.newBranch.projectNameAr;
    this.branchRequestUpdate.contactNumber = this.newBranch.contactNumber;
    this.branchRequestUpdate.isDeliverable = this.newBranch.isDeliverable;
    this.branchRequestUpdate.isMainStore = this.newBranch.isMainStore;
    this.requestService
      .createBranchRequest(
        this.currentRequest.RelatedProjectVersionId,
        this.branchRequestUpdate
      )
      .subscribe((response: any) => {
        window.location.href = "/client/profile";
      });
  }

  cancelChanges() {
    window.location.href = "/client/profile";
  }

  setDeliveryOption(isDeliverable: boolean) {
    this.newBranch.isDeliverable = isDeliverable;
  }

  validateBranch() {}
}
