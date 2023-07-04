import { Project } from "src/app/core/models/project.model";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ContactInfo } from "../../models/contact-info.model";
import { PartnerCreation } from "../../models/partner-creation.model";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent implements OnInit {
  @Input() projectInfo!: Project;
  @Input() editable!: boolean;
  @Output() contactsUpdated = new EventEmitter();

  partnerInfo!: PartnerCreation;

  constructor() {}

  ngOnInit(): void {
    this.editable = false;
  }

  toggleEdit() {
    this.editable = !this.editable;
  }

  updateProject() {
    this.contactsUpdated.emit();
  }
}
