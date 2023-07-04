import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProjectTmpService } from "src/app/core/services/project-tmp.service";
import { ProjectService } from "src/app/core/services/project.service";

@Component({
  selector: "app-project-details",
  templateUrl: "./project-details.component.html",
  styleUrls: ["./project-details.component.scss"],
})
export class ProjectDetailsComponent implements OnInit {
  projectId: any;
  projectInfo: any;

  constructor(
    private route: ActivatedRoute,
    private projectTmpService: ProjectTmpService,
    private projectService: ProjectService
  ) {
    this.route.params.subscribe((params) => (this.projectId = params["id"]));
  }

  ngOnInit(): void {
    this.getProjectById();
  }

  getProjectById() {
    this.projectService.getProject(this.projectId).subscribe((response) => {
      this.projectInfo = response;
    });
    // this.projectInfo = this.projectTmpService.getProjectById(this.projectId);
  }
}
