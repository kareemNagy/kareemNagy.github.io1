import { FileUpload } from "./../../models/file-upload.model";
import { Request } from "./../../models/request.model";
import { FileService } from "./../../services/file.service";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Project } from "../../models/project.model";
import { RequestService } from "../../services/request.service";
import { ProjectService } from "../../services/project.service";
import { UserService } from "../../services/user.service";
import { ValidatorUtil } from "src/app/core/utils/validatot-util";
import { AttachmentService } from "../../services/attachment.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-company-info",
  templateUrl: "./company-info.component.html",
  styleUrls: ["./company-info.component.scss"],
})
export class CompanyInfoComponent implements OnInit {
  @Input() projectInfo!: Project;
  @Input() editable!: boolean;
  @Output() descriptionChanged = new EventEmitter();
  oldDescription: string = "";
  requestAvailable = false;
  currentRequest: Request = new Request();
  attachments: any = [];
  host = environment.hostUrl;

  imageAllowedExtensions: string[] = ["jpeg", "png", "jpg"];
  brochourList: any[] = [];

  constructor(
    private fileUploadService: FileService,
    private projectService: ProjectService,
    private requestService: RequestService,
    private userService: UserService,
    private attachmentService: AttachmentService
  ) {}

  ngOnInit(): void {
    this.getCurrentRequest();
    this.oldDescription = this.projectInfo.descriptionAr;
  }

  getCurrentRequest() {
    this.requestService
      .getProjectOpenRequests(this.projectInfo.projectId)
      .subscribe((response: any) => {
        if (response.Rows.length == 0) {
          this.requestAvailable = false;
          this.attachments = this.projectInfo.attachments;
          this.prepareBrochourList();
        } else {
          this.currentRequest = response.Rows[0];
          this.requestAvailable = true;
          this.getRequestAttachments();
        }
      });
  }

  getRequestAttachments() {
    this.attachmentService
      .getRequestAttachments(this.currentRequest.RelatedProjectVersionId)
      .subscribe((response: any) => {
        this.attachments = response;
        this.prepareBrochourList();
      });
  }

  updateDescription(input: any) {
    this.descriptionChanged.emit((input.target as HTMLInputElement).value);
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
      next: (url: string) => {
        if (url) {
          if (this.userService.getUserRole() == "CLIENT") {
            this.createProjectAttachmentsForClientUser(url, filesValue);
          } else {
            this.createProjectAttachmentsForAdminUser(url, filesValue[0]);
          }
        }
      },
      error: (error) => console.log(error),
    });
  }

  createProjectAttachmentsForClientUser(url: string, filesValue: any) {
    if (this.requestAvailable) {
      this.createProjectAttachment(url, filesValue);
    } else {
      this.createUpdateRequest(url, filesValue);
    }
  }

  createProjectAttachmentsForAdminUser(url: string, file: any) {
    let projectFiles: FileUpload[] = this.prepareProjectFilesArray(file, url);
    this.projectService
      .uploadProjectFiles(this.projectInfo.projectId, projectFiles)
      .subscribe((response) => {
        if (response) {
          this.refreshProjectAttachments();
        }
      });
  }

  createUpdateRequest(fileUrl: string, files: any | null) {
    this.requestService
      .createProjectUpdateRequest(this.projectInfo.projectId)
      .subscribe((response: any) => {
        this.currentRequest = response;
        this.createProjectAttachment(response, files);
      });
  }

  createProjectAttachment(fileUrl: string, files: any | null) {
    const file = new FileUpload();
    file.url = fileUrl;
    file.fileType = files ? files[0].type : "";
    file.isBrochour = true;
    file.name = files ? files[0].name : "";

    this.requestService
      .createAttachmentRequest(
        this.currentRequest.RelatedProjectVersionId,
        file
      )
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  prepareProjectFilesArray(file: any, url: string) {
    const fileUploadObject = new FileUpload();
    fileUploadObject.isBrochour = true;
    fileUploadObject.name = file.name;
    fileUploadObject.fileType = file.type;
    fileUploadObject.url = url;
    const projectFiles: FileUpload[] = [fileUploadObject];
    return projectFiles;
  }

  refreshProjectAttachments() {
    this.projectService
      .getProject(this.projectInfo.projectId)
      .subscribe((response) => {
        this.projectInfo = response;
        this.prepareBrochourList();
      });
  }

  prepareBrochourList() {
    this.brochourList = [];
    if (this.attachments && this.attachments.length > 0) {
      this.brochourList = this.attachments.filter(
        (attachment: any) => attachment.IsBrochour
      );
    }
  }

  deleteAttachment(attachment: any, index: any) {
    if (this.requestAvailable) {
      this.requestService
        .deleteAttachment(
          this.currentRequest.RelatedProjectVersionId,
          attachment.Id
        )
        .subscribe((response: any) => {
          this.brochourList.splice(index, 1);
        });
    } else {
      this.createUpdateRequestForDelete(attachment, index);
    }
  }

  createUpdateRequestForDelete(attachment: any, index: any) {
    this.requestService
      .createProjectUpdateRequest(this.projectInfo.projectId)
      .subscribe((response: any) => {
        this.currentRequest = response;
        this.requestAvailable = true;
        this.deleteAttachment(attachment, index);
      });
  }
}
