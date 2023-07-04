import { Partner } from "./../models/partner.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Constant } from "../utils/constant";
import { PartnerCreation } from "../models/partner-creation.model";

@Injectable({
  providedIn: "root",
})
export class PartnerService {
  constructor(private http: HttpClient) {}

  getBankPartners(): Observable<Partner[]> {
    let url = Constant.PARTNERS_INFO;
    return this.http.get<Partner[]>(url);
  }

  getPartners(projectId: number): Observable<Partner[]> {
    let url = Constant.PARTNERS_INFO;
    let params = new HttpParams();
    params = params.append("ProjectId", projectId);
    return this.http.get<Partner[]>(url, { params: params });
  }

  getPartnerById(partnerId: number): Observable<Partner> {
    let url = Constant.PARTNER_INFO.replace("{partnerId}", partnerId + "");
    return this.http.get<Partner>(url);
  }

  addNewPartner(partner: PartnerCreation): Observable<PartnerCreation> {
    let url = Constant.PARTNER_CREATION_URL;
    return this.http.post<PartnerCreation>(url, partner);
  }
}
