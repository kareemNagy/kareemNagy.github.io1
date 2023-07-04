import { Constant } from "./../utils/constant";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AttachmentService {
  constructor(private http: HttpClient) {}

  getRequestAttachments(requestId: number) {
    let url = Constant.REQUEST_ATTACHMENTS.replace(
      "{requestId}",
      requestId + ""
    );
    return this.http.get(url);
  }
}
