import { ActivatedRoute } from "@angular/router";
import { Partner } from "./../../core/models/partner.model";
import { Component, OnInit } from "@angular/core";
import { PartnerService } from "src/app/core/services/partner.service";

@Component({
  selector: "app-client-partners",
  templateUrl: "./client-partners.component.html",
  styleUrls: ["./client-partners.component.scss"],
})
export class ClientPartnersComponent implements OnInit {
  partnersList!: Partner[];
  servicePartnersList!: Partner[];
  projectId: number = Number(sessionStorage.getItem("projectId"));

  constructor(private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.getPartners();
  }

  getPartners() {
    this.partnerService
      .getPartners(this.projectId)
      .subscribe((partners: Partner[]) => {
        this.partnersList = partners;
      });
  }

  getServicePartners() {}
}
