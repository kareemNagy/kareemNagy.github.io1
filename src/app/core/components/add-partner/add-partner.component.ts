import { PartnerService } from "src/app/core/services/partner.service";
import { Partner } from "./../../models/partner.model";
import { Component, OnInit } from "@angular/core";
import { PartnerCreation } from "../../models/partner-creation.model";

@Component({
  selector: "app-add-partner",
  templateUrl: "./add-partner.component.html",
  styleUrls: ["./add-partner.component.scss"],
})
export class AddPartnerComponent implements OnInit {
  newPartner: PartnerCreation = new PartnerCreation();

  constructor(private partnerService: PartnerService) {}

  ngOnInit(): void {}

  saveChanges() {
    this.partnerService.addNewPartner(this.newPartner).subscribe((respone) => {
      console.log(respone);
    });
  }

  cancelChanges() {}
}
