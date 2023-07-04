import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-page-action-buttons",
  templateUrl: "./page-action-buttons.component.html",
  styleUrls: ["./page-action-buttons.component.scss"],
})
export class PageActionButtonsComponent implements OnInit {
  @Output() saveChanges = new EventEmitter();
  @Output() cancelChanges = new EventEmitter();
  @Input() saveTitle = "حفظ التغييرات";
  @Input() cancelTitle = "إلغاء";

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  save() {
    this.saveChanges.emit();
  }

  cancel() {
    this.cancelChanges.emit();
  }

  open(confirmDeletion: any) {
    this.modalService
      .open(confirmDeletion, {
        ariaLabelledBy: "modal-basic-title",
        size: "lg",
        windowClass: "default-modal",
        centered: true,
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
}
