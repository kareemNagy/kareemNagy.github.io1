import { Project } from 'src/app/core/models/project.model';
import { Category } from "src/app/core/models/category.model";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-activity-request",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.scss"],
})
export class ActivityRequestComponent implements OnInit {
  @Input() projectInfo!: Project;
  @Input() editable = false;
  category!: Category;

  constructor() {}

  ngOnInit(): void {}
}
