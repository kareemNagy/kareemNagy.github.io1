import { StoreCreation } from "./../../models/add-branch.model";
import { Component, Input, OnInit } from "@angular/core";
import { Partner } from "../../models/partner.model";

@Component({
  selector: "app-partner-info",
  templateUrl: "./partner-info.component.html",
  styleUrls: ["./partner-info.component.scss"],
})
export class PartnerInfoComponent implements OnInit {
  @Input() title: string = "";
  @Input() addressTitle: string = "";
  @Input() nameTitle: string = "";
  @Input() editable!: boolean;
  @Input() partnerInfo: Partner = new Partner();
  partnerLocation: any;

  constructor() {}

  ngOnInit(): void {
    this.partnerLocation = {
      lat: this.partnerInfo.Latitude,
      lng: this.partnerInfo.Longitude,
      zoom: 11.5,
    };
  }
}
