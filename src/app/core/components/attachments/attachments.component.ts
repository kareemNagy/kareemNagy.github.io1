import { FileService } from "./../../services/file.service";
import { Request } from "./../../models/request.model";
import { Component, Input, OnInit } from "@angular/core";
import { Attachment } from "../../models/attachment.model";
import { UserService } from "../../services/user.service";
import { RequestService } from "../../services/request.service";
import { FileUpload } from "../../models/file-upload.model";
import { Project } from "../../models/project.model";
import { ProjectService } from "../../services/project.service";
import { AttachmentService } from "../../services/attachment.service";

@Component({
  selector: "app-attachments",
  templateUrl: "./attachments.component.html",
  styleUrls: ["./attachments.component.scss"],
})
export class AttachmentsComponent implements OnInit {
  @Input() projectInfo!: Project;
  @Input() editable!: boolean;
  currentRole = "";
  currentRequest: Request = new Request();
  requestAvailable = false;
  addedFiles: any = [];
  attachmentList: any = [];
  attachments: any = [];

  constructor(
    private userService: UserService,
    private requestService: RequestService,
    private fileUploadService: FileService,
    private projectService: ProjectService,
    private attachmentService: AttachmentService
  ) {
    this.currentRole = this.userService.getUserRole();
  }

  ngOnInit(): void {
    this.getCurrentRequest();
  }

  getCurrentRequest() {
    this.requestService
      .getProjectOpenRequests(this.projectInfo.projectId)
      .subscribe((response: any) => {
        if (response.Rows.length == 0) {
          this.requestAvailable = false;
          this.attachments = this.projectInfo.attachments;
          this.prepareExternalAttachmentsList();
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
        this.prepareExternalAttachmentsList();
      });
  }

  prepareExternalAttachmentsList() {
    this.attachmentList = [];
    if (this.projectInfo && this.attachments) {
      this.attachmentList = this.attachments.filter(
        (attachment: any) => attachment.IsExternal
      );
    }
  }

  updateDescription(input: any) {
    console.log((input.target as HTMLInputElement).value);
  }

  uploadFile(files: any) {
    const filesValue = (files.target as HTMLInputElement).files;
    if (!filesValue || !filesValue.length) {
      return;
    }

    this.fileUploadService.uploadFile(filesValue).subscribe({
      next: (response: string) => {
        if (response) {
          if (this.currentRole === "CLIENT") {
            this.createProjectAttachmentsForClientUser(response, filesValue);
          } else {
            this.createProjectAttachmentsForAdminUser(response, filesValue[0]);
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
    file.isExternal = true;
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

  prepareProjectFilesArray(file: any, url: string) {
    const fileUploadObject = new FileUpload();
    fileUploadObject.isExternal = true;
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
        this.prepareExternalAttachmentsList();
      });
  }

  deleteAttachment(attachment: any, index: any) {
    if (this.requestAvailable) {
      this.requestService
        .deleteAttachment(
          this.currentRequest.RelatedProjectVersionId,
          attachment.Id
        )
        .subscribe((response: any) => {
          this.attachmentList.splice(index, 1);
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

  openAttachment(url: string) {
    window.open(url);
  }
}
