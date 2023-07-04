import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-main-info",
  templateUrl: "./main-info.component.html",
  styleUrls: ["./main-info.component.scss"],
})
export class MainInfoComponent implements OnInit {
  @Input() projectInfo: any;

  constructor() {}

  ngOnInit(): void {}
}
