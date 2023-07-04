import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constant } from "../utils/constant";

@Injectable({
  providedIn: "root",
})
export class CommentService {
  constructor(private http: HttpClient) {}

  createProjectReview(reviewObject: any) {
    let url = Constant.PROJECT_REVIEW_CREATION_URL;
    return this.http.post<any>(url, reviewObject);
  }

  getPendingComments() {
    let url = Constant.PENDING_COMMENTS;
    return this.http.get<any>(url);
  }

  approveComment(commentId: any) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append("reviewId", commentId);
    let url = Constant.APPROVE_COMMENT;
    return this.http.post<any>(url, {}, { params: httpParams });
  }

  rejectComment(commentId: any) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append("reviewId", commentId);
    let url = Constant.REJECT_COMMENT;
    return this.http.post<any>(url, {}, { params: httpParams });
  }
}
