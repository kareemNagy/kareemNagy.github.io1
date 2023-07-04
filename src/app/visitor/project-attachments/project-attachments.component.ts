import { Component, Input, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-project-attachments",
  templateUrl: "./project-attachments.component.html",
  styleUrls: ["./project-attachments.component.scss"],
})
export class ProjectAttachmentsComponent implements OnInit {
  @Input() attachments: any[] = [];
  host = environment.hostUrl;
  constructor() {}

  ngOnInit(): void {}
}
