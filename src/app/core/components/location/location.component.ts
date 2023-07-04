import { Project } from "src/app/core/models/project.model";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"],
})
export class LocationComponent implements OnInit {
  @Input() project!: Project;
  @Input() editable!: boolean;
  @Output() locationChange = new EventEmitter();
  location: string = "";

  constructor() {}

  ngOnInit(): void {
    this.location = this.project.latitude + "," + this.project.longitute;
  }

  updateLocation(location: any) {
    this.location = location;
    this.locationChange.emit(this.location);
  }
}
