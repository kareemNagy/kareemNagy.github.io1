import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Partner } from "../../models/partner.model";
import { PartnerService } from "../../services/partner.service";

@Component({
  selector: "app-partner-page",
  templateUrl: "./partner-page.component.html",
  styleUrls: ["./partner-page.component.scss"],
})
export class PartnerPageComponent implements OnInit {
  partnerId!: number;
  partnerInfo!: Partner;

  constructor(
    private route: ActivatedRoute,
    private partnerService: PartnerService
  ) {
    this.route.params.subscribe((params) => (this.partnerId = params["id"]));
  }

  ngOnInit(): void {
    this.getPartnerInfo();
  }

  getPartnerInfo(): void {
    this.partnerService.getPartnerById(this.partnerId).subscribe((partner) => {
      this.partnerInfo = partner;
    });
  }
}
