import { Project } from "src/app/core/models/project.model";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-contacts-request",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsRequestComponent implements OnInit {
  @Input() projectInfo!: any;
  @Input() editable!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.editable = false;
  }
}
