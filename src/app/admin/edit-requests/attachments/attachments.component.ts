import { Component, Input, OnInit } from "@angular/core";
import { UserService } from "src/app/core/services/user.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-attachments-request",
  templateUrl: "./attachments.component.html",
  styleUrls: ["./attachments.component.scss"],
})
export class AttachmentsRequestComponent implements OnInit {
  @Input() projectInfo!: any;
  @Input() editable!: boolean;
  currentRole = "";
  requestAvailable = false;
  addedFiles: any = [];
  attachmentList: any = [];

  constructor(private userService: UserService) {
    this.currentRole = this.userService.getUserRole();
  }

  ngOnInit(): void {
    this.prepareExternalAttachmentsList();
  }

  prepareExternalAttachmentsList() {
    this.attachmentList = [];
    if (this.projectInfo && this.projectInfo.Attachments) {
      this.attachmentList = this.projectInfo.Attachments.filter(
        (attachment: any) => attachment.IsExternal
      );
    }
  }

  openAttachment(url: string) {
    window.open(url);
  }
}
