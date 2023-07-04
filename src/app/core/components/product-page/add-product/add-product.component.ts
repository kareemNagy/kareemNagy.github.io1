import { FileService } from "./../../../services/file.service";
import { Request } from "./../../../models/request.model";
import { RequestService } from "src/app/core/services/request.service";
import { ProductCreation } from "../../../models/product-creation.model";
import { ProductService } from "src/app/core/services/product.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/core/services/user.service";
import { FileUpload } from "src/app/core/models/file-upload.model";
import { ValidatorUtil } from "src/app/core/utils/validatot-util";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {
  product = new ProductCreation();
  showError = false;
  currentRequest: Request = new Request();
  projectId!: number;
  requestAvailable = false;
  fileUploadList: FileUpload[] = [];
  imageAllowedExtensions: string[] = ["jpeg", "png", "jpg"];
  host = environment.hostUrl;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private requestService: RequestService,
    private fileUploadService: FileService,
    private userService: UserService
  ) {
    this.route.params.subscribe(
      (params) => (this.projectId = params["projectId"])
    );
  }

  ngOnInit(): void {
    console.log(this.projectId);
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

  setDeliveryOption(isDeliverable: boolean) {
    this.product.canDelivered = isDeliverable;
  }

  saveChanges() {
    if (this.validateProduct()) {
      this.product.shortDescriptionAr = this.product.fullDescriptionAr;
      this.product.projectId = this.projectId;
      this.product.nameEn = this.product.nameAr;
      this.product.fullDescriptionEn = this.product.fullDescriptionAr;
      this.product.filelst = this.fileUploadList;
      if (this.userService.getUserRole() == "CLIENT") {
        this.createProductForClientUser();
      } else {
        this.createProductForAdminUser();
      }
    } else {
      alert("Invalid form!");
    }
  }

  createProductForClientUser() {
    if (this.requestAvailable) {
      this.createProductRequest();
    } else {
      this.createUpdateRequest();
    }
  }

  createProductForAdminUser() {
    console.log(this.product);
    this.productService.saveProduct(this.product).subscribe((response) => {
      window.location.href = "/admin/projects/" + this.projectId;
    });
  }

  createUpdateRequest() {
    this.requestService
      .createProjectUpdateRequest(this.projectId)
      .subscribe((response: any) => {
        this.currentRequest = response;
        this.createProductRequest();
      });
  }

  createProductRequest() {
    this.requestService
      .createProductRequest(
        this.currentRequest.RelatedProjectVersionId,
        this.product
      )
      .subscribe((response: any) => {
        if (this.product.filelst.length > 0) {
          for (let object of this.product.filelst) {
            this.requestService
              .createProductAttachment(response.Id, object)
              .subscribe((response: any) => {});
          }
        }
        window.location.href = "/client/profile";
      });
  }

  validateProduct(): boolean {
    if (!this.product.nameAr) {
      return false;
    }
    return true;
  }

  uploadFile(files: any) {
    const filesValue = (files.target as HTMLInputElement).files;
    if (
      !filesValue ||
      !filesValue.length ||
      !ValidatorUtil.isValidFileExtension(
        filesValue[0],
        this.imageAllowedExtensions
      )
    ) {
      return;
    }

    this.fileUploadService.uploadFile(filesValue).subscribe({
      next: (response) => {
        if (response) {
          let fileUploadObject: FileUpload = this.prepareFileUploadObject(
            filesValue[0],
            response
          );
          this.fileUploadList.push(fileUploadObject);
        }
      },
      error: (error) => console.log(error),
    });
  }

  prepareFileUploadObject(file: any, url: string) {
    const fileUploadObject = new FileUpload();
    fileUploadObject.isBrochour = false;
    fileUploadObject.isExternal = true;
    fileUploadObject.name = file.name;
    fileUploadObject.fileType = file.type;
    fileUploadObject.url = url;
    return fileUploadObject;
  }

  cancelChanges() {
    if (this.userService.getUserRole() == "ADMIN") {
      window.location.href = "/admin";
    } else {
      window.location.href = "/client/profile";
    }
  }
}
