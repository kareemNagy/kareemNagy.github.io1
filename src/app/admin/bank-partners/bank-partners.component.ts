import { PartnerService } from "src/app/core/services/partner.service";
import { Component, OnInit } from "@angular/core";
import { Partner } from "src/app/core/models/partner.model";

@Component({
  selector: "app-bank-partners",
  templateUrl: "./bank-partners.component.html",
  styleUrls: ["./bank-partners.component.scss"],
})
export class BankPartnersComponent implements OnInit {
  bankPartners: Partner[] = [];

  constructor(private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.getBankPartners();
  }

  getBankPartners(): void {
    this.partnerService.getBankPartners().subscribe((partners: Partner[]) => {
      this.bankPartners = partners;
    });
  }
}
