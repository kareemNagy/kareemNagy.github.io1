import { BranchService } from "src/app/core/services/branch.service";
import { Branch } from "./../../models/branch.model";
import { Component, Input, OnInit } from "@angular/core";
import { Store } from "../../models/store.model";
import { UserService } from "../../services/user.service";
import { ActivatedRoute } from "@angular/router";
import { Project } from "../../models/project.model";

@Component({
  selector: "app-branches",
  templateUrl: "./branches.component.html",
  styleUrls: ["./branches.component.scss"],
})
export class BranchesComponent implements OnInit {
  @Input() project!: Project;
  @Input() editable!: boolean;
  currentRole!: string;
  projectId!: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private branchService: BranchService
  ) {
    this.route.params.subscribe((params) => (this.projectId = params["id"]));
    this.projectId = this.project?.projectId;
  }

  ngOnInit(): void {
    this.currentRole = this.userService.getUserRole();
  }

  deleteBranch(branch: any, index: number) {
    this.branchService.deleteBranch(branch.Id).subscribe();
    this.project.branches.splice(index, 1);
  }
}
