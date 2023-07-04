import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-delivery-options",
  templateUrl: "./delivery-options.component.html",
  styleUrls: ["./delivery-options.component.scss"],
})
export class DeliveryOptionsComponent implements OnInit {
  @Input() editable!: boolean;
  @Input() deliverable!: boolean;
  @Output() updateDeliveryOption = new EventEmitter<boolean>();
  
  constructor() {}

  ngOnInit(): void {}
}
