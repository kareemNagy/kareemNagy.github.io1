import { Project } from 'src/app/core/models/project.model';
import { AppPreferenceService } from "./../../services/app-preference.service";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-page-header",
  templateUrl: "./page-header.component.html",
  styleUrls: ["./page-header.component.scss"],
})
export class PageHeaderComponent implements OnInit {
  @Input() projectInfo!: Project;

  currentPath: string[] = [];

  constructor(private appPreferenceService: AppPreferenceService) {}

  ngOnInit(): void {
    this.handleBreadcrumbValus();
  }

  handleBreadcrumbValus(): void {
    this.currentPath = this.appPreferenceService
      .getCurrentPath()
      .split("/")
      .filter((x: string) => x.length > 0);
  }
}
