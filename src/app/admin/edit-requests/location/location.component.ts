import { Project } from "src/app/core/models/project.model";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-location-request",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"],
})
export class LocationRequestComponent implements OnInit {
  @Input() project!: any;
  @Input() editable!: boolean;
  @Output() locationChange = new EventEmitter();
  location: string = "";

  constructor() {}

  ngOnInit(): void {
    this.location = this.project.Latitude + "," + this.project.Longitude;
  }
}
