import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Project } from "src/app/core/models/project.model";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "app-branches-request",
  templateUrl: "./branches.component.html",
  styleUrls: ["./branches.component.scss"],
})
export class BranchesRequestComponent implements OnInit {
  @Input() project!: any;
  @Input() editable!: boolean;
  currentRole!: string;
  projectId!: number;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentRole = this.userService.getUserRole();
  }
}
