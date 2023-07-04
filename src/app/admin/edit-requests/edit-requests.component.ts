import { Component, OnInit } from "@angular/core";
import { EditRequest } from "src/app/core/models/edit-request.model";
import { RequestService } from "src/app/core/services/request.service";

@Component({
  selector: "app-edit-requests",
  templateUrl: "./edit-requests.component.html",
  styleUrls: ["./edit-requests.component.scss"],
})
export class EditRequestsComponent implements OnInit {
  editRequests: EditRequest[] = [];

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.getEditRequests();
  }

  getEditRequests(): void {
    this.requestService.getRequests().subscribe((requests: any) => {
      this.editRequests = requests.Rows;
    });
  }
}
