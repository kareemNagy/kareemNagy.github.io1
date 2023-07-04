import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-company-request-info",
  templateUrl: "./company-info.component.html",
  styleUrls: ["./company-info.component.scss"],
})
export class CompanyInfoRequestComponent implements OnInit {
  @Input() projectInfo!: any;
  @Input() editable!: boolean;
  @Output() descriptionChanged = new EventEmitter();
  host = environment.hostUrl;

  imageAllowedExtensions: string[] = ["jpeg", "png", "jpg"];
  brochourList: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.prepareBrochourList();
  }

  updateDescription(input: any) {
    this.descriptionChanged.emit((input.target as HTMLInputElement).value);
  }

  prepareBrochourList() {
    this.brochourList = [];
    if (this.projectInfo && this.projectInfo.Attachments) {
      this.brochourList = this.projectInfo.Attachments.filter(
        (attachment: any) => attachment.IsBrochour
      );
    }
  }
}
