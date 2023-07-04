import { Request } from "./../../core/models/request.model";
import { RequestService } from "src/app/core/services/request.service";
import { ProjectService } from "./../../core/services/project.service";
import { Component, OnInit } from "@angular/core";
import { Project } from "src/app/core/models/project.model";

@Component({
  selector: "app-project-info",
  templateUrl: "./project-info.component.html",
  styleUrls: ["./project-info.component.scss"],
})
export class ProjectInfoComponent implements OnInit {
  currentProject!: Project;
  showApprovalButtons = false;
  showEditButtons = false;
  locationChanged = false;
  descriptionChanged = false;
  currentUpdateRequest: Request = new Request();
  currentDescription = "";
  currentLocation = "";
  requestAvailable = false;
  constructor(
    private projectService: ProjectService,
    private requestService: RequestService
  ) {}

  ngOnInit(): void {
    this.getCurrentProject();
  }

  getCurrentProject(): void {
    this.projectService.getProject(16646).subscribe((project) => {
      this.currentProject = project;
      this.currentDescription = this.currentProject.descriptionAr;
      this.currentLocation =
        this.currentProject.latitude + "," + this.currentProject.longitute;
      this.getCurrentUpdateRequests();
    });
  }

  getCurrentUpdateRequests(): void {
    this.requestService
      .getProjectOpenRequests(this.currentProject.projectId)
      .subscribe((response: any) => {
        this.currentUpdateRequest = response.Rows[0];
        if (response?.Rows[0]?.ApprovalStatusRecord?.NameAr == "Draft") {
          this.showApprovalButtons = true;
          this.requestAvailable = true;
        }
      });
  }

  setLocation(location: any) {
    this.locationChanged = true;
    this.currentProject.latitude = location.split(",")[0];
    this.currentProject.longitute = location.split(",")[1];
    this.currentProject.longitude = location.split(",")[1];
    if (!this.showEditButtons) {
      this.showEditButtons = true;
    }
  }

  cancel() {
    this.showApprovalButtons = false;
  }

  cancelEdit() {
    this.showEditButtons = false;
    this.currentProject.descriptionAr = this.currentDescription;
    this.currentProject.latitude = this.currentLocation.split(",")[0];
    this.currentProject.longitute = this.currentLocation.split(",")[1];
  }

  setDescription(newDescription: string) {
    this.currentProject.descriptionAr = newDescription;
    this.currentProject.descriptionEn = newDescription;
    this.descriptionChanged = true;
    if (!this.showEditButtons) {
      this.showEditButtons = true;
    }
  }

  saveProjectInfo() {
    this.currentProject.address = this.currentLocation;
    this.currentProject.longitude = this.currentProject.longitute;
    this.currentProject.projectCategoryId = 1;
    this.currentProject.projectSubCategoryId = 1;
    if (this.requestAvailable) {
      this.requestService
        .createProjectChange(
          this.currentProject,
          this.currentUpdateRequest.RelatedProjectVersionId
        )
        .subscribe((response: any) => {
          this.showEditButtons = false;
          if (!this.showApprovalButtons) {
            this.showApprovalButtons = true;
          }
        });
    } else {
      this.createUpdateRequest();
    }
  }

  createUpdateRequest() {
    this.requestService
      .createProjectUpdateRequest(this.currentProject.projectId)
      .subscribe((response: any) => {
        this.currentUpdateRequest = response;
        this.requestAvailable = true;
        this.saveProjectInfo();
      });
  }

  updateContacts() {
    console.log(this.currentProject);
    if (!this.showEditButtons) {
      this.showEditButtons = true;
    }
  }

  sendForApproval() {
    this.requestService
      .sendProjectRequestForApproval(this.currentUpdateRequest.Id)
      .subscribe((response: any) => {
        this.showApprovalButtons = false;
      });
  }
}
