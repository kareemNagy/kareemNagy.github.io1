import { CommentService } from "src/app/core/services/comment.service";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-project-comments",
  templateUrl: "./project-comments.component.html",
  styleUrls: ["./project-comments.component.scss"],
})
export class ProjectCommentsComponent implements OnInit {
  @Input() comments: any[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    console.log(this.comments);
  }

  approveSelectedComments() {
    for (let comment of this.comments) {
      if (comment.selected) {
        this.approveComment(comment, 0);
      }
    }
  }

  rejectSelectedComments() {
    for (let comment of this.comments) {
      if (comment.selected) {
        this.rejectComment(comment, 0);
      }
    }
  }

  //TODO remove index: number lw 3agbk 7al indexOf...lw msh 3agbk ha3ml approve all b forkjoin w msh handah 3la approveComment mn approve selected comments
  approveComment(comment: any, index: number) {
    this.commentService
      .approveComment(comment.Id)
      .subscribe((response: any) => {
        this.comments.splice(this.comments.indexOf(comment), 1);
      });
  }

  rejectComment(comment: any, index: number) {
    this.commentService.rejectComment(comment.Id).subscribe((response: any) => {
      this.comments.splice(this.comments.indexOf(comment), 1);
    });
  }

  selectAllComments(event: any) {
    for (let comment of this.comments) {
      comment.selected = event.target.checked;
    }
  }
}
