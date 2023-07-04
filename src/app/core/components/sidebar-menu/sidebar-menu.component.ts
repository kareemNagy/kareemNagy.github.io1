import { SideBarList } from "./../../models/side-bar-list.model";
import { Component, OnInit } from "@angular/core";
import { SideBarService } from "../../services/side-menu.service";

@Component({
  selector: "app-sidebar-menu",
  templateUrl: "./sidebar-menu.component.html",
  styleUrls: ["./sidebar-menu.component.scss"],
})
export class SidebarMenuComponent implements OnInit {
  sidebarList!: SideBarList[];

  constructor(private sideBarService: SideBarService) {}

  ngOnInit(): void {
    this.sidebarList = this.sideBarService.getSideBarItems();
  }
}
