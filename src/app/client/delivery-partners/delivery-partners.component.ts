import { Component, Input, OnInit } from "@angular/core";
import { Partner } from "src/app/core/models/partner.model";

@Component({
  selector: "app-delivery-partners",
  templateUrl: "./delivery-partners.component.html",
  styleUrls: ["./delivery-partners.component.scss"],
})
export class DeliveryPartnersComponent implements OnInit {
  @Input() deliveryPartners!: Partner[];

  constructor() {}

  ngOnInit(): void {}
}
