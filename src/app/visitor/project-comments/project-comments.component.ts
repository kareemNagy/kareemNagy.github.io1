import { Component, Input, OnInit } from "@angular/core";
import { CommentService } from "src/app/core/services/comment.service";

@Component({
  selector: "app-project-comments",
  templateUrl: "./project-comments.component.html",
  styleUrls: ["./project-comments.component.scss"],
})
export class ProjectCommentsComponent implements OnInit {
  @Input() projectId!: number;
  @Input() reviews: any[] = [];
  showComments: boolean = true;
  averageRate: number = 0;
  averageRateWithoutDecimal: number = 1;
  isUserRated: boolean = false;

  reviewObject: any = {
    id: 0,
    projectId: 0,
    visitorId: 0,
    rate: 1,
    reviewComment: "",
  };

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.initProjectReviewObject();
    this.calculateAverageRate();
  }

  initProjectReviewObject() {
    this.reviewObject.projectId = this.projectId;
    this.reviewObject.visitorId = 2;
  }

  addReview() {
    if (!this.isUserRated) {
      this.reviewObject.rate = this.averageRateWithoutDecimal;
    }
    this.commentService
      .createProjectReview(this.reviewObject)
      .subscribe((response) => {});
  }

  rateProject(rate: number) {
    this.isUserRated = true;
    this.reviewObject.rate = rate;
  }

  toggleComments() {
    this.showComments = !this.showComments;
  }

  calculateAverageRate() {
    if (this.reviews && this.reviews.length) {
      let total = 0;
      for (let review of this.reviews) {
        total += review.Rate;
      }
      this.averageRate = total / this.reviews.length;
      this.averageRateWithoutDecimal = Math.ceil(this.averageRate);
    }
  }
}
