import { statistics } from "./../../core/models/statistics.model";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-client-statistics",
  templateUrl: "./client-statistics.component.html",
  styleUrls: ["./client-statistics.component.scss"],
})
export class ClientStatisticsComponent implements OnInit {
  @Input() projectId!: number;
  @Input() productCount!: number;
  @Input() storeCount!: number;
  @Input() commentCount!: number;

  private numberOfProducts = new statistics("عدد المنتجات", this.productCount);
  private numberOfBranches = new statistics("عدد منافذ البيع", this.storeCount);
  private numberOfComments = new statistics("التعليقات", this.commentCount);
  statisticsCards: statistics[] = [
    this.numberOfProducts,
    this.numberOfBranches,
    this.numberOfComments,
  ];

  constructor() {}

  ngOnInit(): void {
    this.numberOfProducts.value = this.productCount;
    this.numberOfBranches.value = this.storeCount;
    this.numberOfComments.value = this.commentCount;
  }
}
