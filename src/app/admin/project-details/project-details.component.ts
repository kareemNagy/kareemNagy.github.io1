import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Project } from "src/app/core/models/project.model";
import { ProjectService } from "src/app/core/services/project.service";

@Component({
  selector: "app-project-details",
  templateUrl: "./project-details.component.html",
  styleUrls: ["./project-details.component.scss"],
})
export class ProjectDetailsComponent implements OnInit {
  projectId!: number;
  currentProject!: Project;
  showEditButtons = false;
  descriptionChanged = false;
  currentDescription = "";
  currentLocation = "";

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => (this.projectId = params["id"]));
  }

  ngOnInit(): void {
    this.getCurrentProject();
  }

  getCurrentProject(): void {
    this.projectService.getProject(this.projectId).subscribe((project) => {
      this.currentProject = project;
    });
  }

  setDescription(newDescription: string) {
    this.currentProject.descriptionAr = newDescription;
    this.currentProject.descriptionEn = newDescription;
    this.descriptionChanged = true;
    if (!this.showEditButtons) {
      this.showEditButtons = true;
    }
  }

  cancelEdit() {
    this.showEditButtons = false;
    this.currentProject.descriptionAr = this.currentDescription;
    this.currentProject.latitude = this.currentLocation.split(",")[0];
    this.currentProject.longitute = this.currentLocation.split(",")[1];
  }
}
