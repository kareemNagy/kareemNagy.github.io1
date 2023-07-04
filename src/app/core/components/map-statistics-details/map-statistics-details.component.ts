import { StatisticsService } from "./../../services/statistics.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-map-statistics-details",
  templateUrl: "./map-statistics-details.component.html",
  styleUrls: ["./map-statistics-details.component.scss"],
})
export class MapStatisticsDetailsComponent implements OnInit {
  @Input() region: string = "";
  regionStatistics: any;

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    this.getRegionStatistics();
  }

  getRegionStatistics() {
    this.regionStatistics = this.statisticsService.getStatisticsByRegion(
      this.region
    );
    console.log(this.regionStatistics);
  }
}
