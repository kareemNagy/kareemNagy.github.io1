import { RequestService } from "src/app/core/services/request.service";
import { CommentService } from "src/app/core/services/comment.service";
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { statistics } from "src/app/core/models/statistics.model";

@Component({
  selector: "app-admin-statistics",
  templateUrl: "./admin-statistics.component.html",
  styleUrls: ["./admin-statistics.component.scss"],
})
export class AdminStatisticsComponent implements OnInit, OnChanges {
  @Input() projectsNumber = 0;
  commentsNumber = 0;
  requestsNumber = 0;
  ready = false;
  private updateRequests = new statistics("عدد طلبات التعديل", 8);
  private projects = new statistics("عدد المشاريع", this.projectsNumber);
  private numberOfComments = new statistics(
    "التعليقات الجديدة",
    this.commentsNumber
  );
  statisticsCards: statistics[] = [
    this.updateRequests,
    this.projects,
    this.numberOfComments,
  ];
  constructor(
    private commentService: CommentService,
    private requestService: RequestService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.getPendingComments();
    this.getPendingRequests();
  }

  getPendingComments(): void {
    this.commentService.getPendingComments().subscribe((response: any) => {
      this.commentsNumber = response.length;
    });
  }

  getPendingRequests() {
    this.requestService.getRequests().subscribe((response: any) => {
      this.requestsNumber = response.Rows.length;
      this.ready = true;
    });
  }
}
