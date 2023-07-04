import { Component, OnInit } from "@angular/core";
import { ProjectInfo } from "src/app/core/models/project-info.model";
import { Project } from "src/app/core/models/project.model";
import { ProjectService } from "src/app/core/services/project.service";

@Component({
  selector: "app-admin-landing",
  templateUrl: "./admin-landing.component.html",
  styleUrls: ["./admin-landing.component.scss"],
})
export class AdminLandingComponent implements OnInit {
  projects: Project[] = [];
  projectsCount = 0;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects(): void {
    this.projectService.getAllProjects().subscribe((projects) => {
      this.projects = projects.Rows;
      this.projectsCount = projects.PaginationInfo.TotalRowsCount;
    });
  }
}
