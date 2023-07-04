import { UserService } from './../../core/services/user.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  currentRole: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentRole = this.userService.getUserRole();
  }
}
