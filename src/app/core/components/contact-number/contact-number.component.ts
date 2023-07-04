import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-contact-number",
  templateUrl: "./contact-number.component.html",
  styleUrls: ["./contact-number.component.scss"],
})
export class ContactNumberComponent implements OnInit {
  @Input() editable!: boolean;
  @Input() contactNumber: string = "";
  @Output() updateContactNumber = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  setContactNumber(contactNumber: number): void {
    this.updateContactNumber.emit(contactNumber.toString());
  }
}
