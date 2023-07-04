import { Project } from "src/app/core/models/project.model";
import { ActivatedRoute } from "@angular/router";
import { ProjectService } from "src/app/core/services/project.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-project-comments",
  templateUrl: "./project-comments.component.html",
  styleUrls: ["./project-comments.component.scss"],
})
export class ProjectCommentsComponent implements OnInit {
  comments: any[] = [];
  projectId!: any;
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => (this.projectId = params["projectId"]));
  }

  ngOnInit(): void {
    this.projectService
      .getProject(this.projectId)
      .subscribe((project: Project) => {
        this.comments = project.reviews;
      });
  }
}
