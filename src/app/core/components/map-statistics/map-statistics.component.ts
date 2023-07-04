import { statistics } from "src/app/core/models/statistics.model";
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-map-statistics",
  templateUrl: "./map-statistics.component.html",
  styleUrls: ["./map-statistics.component.scss"],
})
export class MapStatisticsComponent implements OnInit, OnChanges {
  @Output() closeStatistics = new EventEmitter();
  @Input() selectedDistrict: any;
  showWindow = false;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log(this.selectedDistrict);
  }

  open(statisticsDetails: any) {
    this.modalService
      .open(statisticsDetails, {
        ariaLabelledBy: "modal-basic-title",
        size: "xl",
        windowClass: "default-modal",
      })
      .result.then(
        (result) => {
          // this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  closeInfoWindow() {
    this.closeStatistics.emit();
  }
}
