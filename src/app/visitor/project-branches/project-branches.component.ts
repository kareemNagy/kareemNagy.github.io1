import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-project-branches",
  templateUrl: "./project-branches.component.html",
  styleUrls: ["./project-branches.component.scss"],
})
export class ProjectBranchesComponent implements OnInit {
  @Input() branches: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
