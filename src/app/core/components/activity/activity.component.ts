import { Project } from 'src/app/core/models/project.model';
import { Category } from "src/app/core/models/category.model";
import { CategoryService } from "./../../services/cateogry.service";
import { Component, Input, OnInit } from "@angular/core";
import { Activity } from "../../models/activity.model";

@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.scss"],
})
export class ActivityComponent implements OnInit {
  @Input() projectInfo!: Project;
  @Input() editable = false;
  category!: Category;

  constructor() {}

  ngOnInit(): void {}
}
