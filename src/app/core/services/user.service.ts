import { CookieService } from "ngx-cookie-service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  getUserRole(): string {
    if (this.cookies.get("ROLE")) {
      return this.cookies.get("ROLE");
    }
    return "VISITOR";
  }
}
