import { ROLE } from "./../utils/role.enum";
import { UserService } from "./user.service";
import { CookieService } from "ngx-cookie-service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Project } from "../models/project.model";
import { Observable } from "rxjs";
import { Constant } from "../utils/constant";
import { SideBarList } from "../models/side-bar-list.model";
@Injectable({
  providedIn: "root",
})
export class SideBarService {
  private sideBarList: SideBarList[] = [];
  private currentRole = this.userService.getUserRole();

  constructor(private http: HttpClient, private userService: UserService) {}

  getSideBarItems(): SideBarList[] {
    if (this.currentRole == ROLE.CLIENT.toString()) {
      this.sideBarList = [
        {
          title: "companyProfile",
          route: ["profile"],
        },
        {
          title: "reactiveMap",
          route: ["map"],
        },
        {
          title: "partners",
          route: ["partners"],
        },
      ];
    } else if (this.currentRole == ROLE.ADMIN.toString()) {
      this.sideBarList = [
        {
          title: "mainPage",
          route: ["home"],
        },
        {
          title: "projects",
          route: ["projects"],
        },
        {
          title: "bank-partners",
          route: ["partners"],
        },
        {
          title: "branches",
          route: ["branches"],
        },
        {
          title: "lookupManagement",
          route: ["management"],
        },
        {
          title: "comments",
          route: ["comments"],
        },
        {
          title: "editRequests",
          route: ["edit-requests"],
        }
      ];
    }
    return this.sideBarList;
  }
}
