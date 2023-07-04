import { RequestService } from "./../../../core/services/request.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-changes",
  templateUrl: "./edit-changes.component.html",
  styleUrls: ["./edit-changes.component.scss"],
})
export class EditChangesComponent implements OnInit {
  versionId: number = 0;
  products: any[] = [];
  branches: any[] = [];
  attachments: any[] = [];
  currentProject!: any;
  showCompanyInfo = false;
  showProducts = false;
  showBranches = false;
  showAttachments = false;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService
  ) {
    this.route.params.subscribe((params) => (this.versionId = params["id"]));
  }

  ngOnInit(): void {
    this.getRequestDetails();
  }

  getRequestDetails() {
    this.requestService
      .getRequestDetails(this.versionId)
      .subscribe((response: any) => {
        this.currentProject = response;
        this.checkCompanyChanges();
        this.checkAttachmentsChanges();
        this.checkBranchesChanges();
        this.checkProductsChanges();
      });
  }

  checkCompanyChanges() {
    if (this.currentProject.DbRowState.NameEn != "Unchanged") {
      this.showCompanyInfo = true;
    }
  }

  checkProductsChanges() {
    let count = 0;
    for (let product of this.currentProject.Products) {
      if (product.DbRowState.NameEn != "Unchanged") {
        count++;
        this.products.push(product);
      }
    }
    if (count > 0) {
      this.currentProject.Products = this.products;
      this.showProducts = true;
    }
  }

  checkAttachmentsChanges() {
    let count = 0;
    for (let attachment of this.currentProject.Attachments) {
      if (attachment.DbRowState.NameEn != "Unchanged") {
        count++;
        this.attachments.push(attachment);
      }
    }
    if (count > 0) {
      this.currentProject.Attachments = this.attachments;
      this.showAttachments = true;
    } else {
      this.currentProject.Attachments = [];
    }
  }

  checkBranchesChanges() {
    let count = 0;
    for (let store of this.currentProject.Stores) {
      if (store.DbRowState.NameEn != "Unchanged") {
        count++;
        this.branches.push(store);
      }
    }
    if (count > 0) {
      this.currentProject.Stores = this.branches;
      this.showBranches = true;
    }
  }

  approve() {
    this.requestService
      .approveRequest(this.currentProject.RequestId)
      .subscribe(() => (window.location.href = "/admin/edit-requests"));
  }

  reject() {
    this.requestService
      .rejectRequest(this.currentProject.RequestId)
      .subscribe(() => (window.location.href = "/admin/edit-requests"));
  }
}
