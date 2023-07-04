import { Project } from "src/app/core/models/project.model";
import { ProjectService } from "src/app/core/services/project.service";
import { CommentService } from "./../../core/services/comment.service";
import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-new-comments",
  templateUrl: "./new-comments.component.html",
  styleUrls: ["./new-comments.component.scss"],
})
export class NewCommentsComponent implements OnInit {
  comments: any;
  projectIds = new Array<number>();
  responsesList: any[] = [];
  projects: any[] = [];
  selectedProject!: any;
  showProjectComments = false;
  constructor(
    private commentService: CommentService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.getPendingComments();
  }

  getPendingComments() {
    this.commentService.getPendingComments().subscribe((response: any) => {
      this.comments = response;
      for (let comment of this.comments) {
        if (!this.projectIds.includes(comment.ProjectId)) {
          this.projectIds.push(comment.ProjectId);
          this.responsesList.push(
            this.projectService.getProject(comment.ProjectId)
          );
        }
      }
      forkJoin(this.responsesList).subscribe((response: any[]) => {
        this.projects = response;
        for (let project of this.projects) {
          project.comments = [];
          for (let comment of this.comments) {
            if (comment.ProjectId === project.projectId) {
              project.comments.push(comment);
            }
          }
        }
        console.log(this.projects);
      });
    });
  }

  selectProject(project: any) {
    this.showProjectComments = true;
    this.selectedProject = project;
  }
}
