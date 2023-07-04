import { FileUpload } from "src/app/core/models/file-upload.model";
import { ProductCreation } from "../models/product-creation.model";
import { Store } from "./../models/store.model";
import { Partner } from "./../models/partner.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Constant } from "../utils/constant";
import { Branch } from "../models/branch.model";
import { Project } from "../models/project.model";

@Injectable({
  providedIn: "root",
})
export class RequestService {
  constructor(private http: HttpClient) {}

  getRequests(): Observable<any> {
    let url = Constant.EDIT_REQUESTS;
    return this.http.get<any>(url);
  }

  getRequestDetails(versionId: number): Observable<any> {
    let url = Constant.EDIT_REQUEST.replace("{versionId}", versionId + "");
    let params = new HttpParams();
    params = params.append("hasChangesOnly", true);
    return this.http.get<any>(url, { params: params });
  }

  createProjectChange(project: Project, requestId: any) {
    let url = Constant.CREATE_PROJECT_CHANGE.replace("{requestId}", requestId);
    return this.http.post(url, project);
  }

  getProjectOpenRequests(projectId: number): Observable<any> {
    let url = Constant.PROJECT_OPEN_REQUEST_URL.replace(
      "{projectId}",
      projectId + ""
    );
    return this.http.get<any>(url);
  }

  createProjectUpdateRequest(projectId: number): Observable<any> {
    let url = Constant.PROJECT_REQUEST_CREATE.replace(
      "{projectId}",
      projectId + ""
    );
    return this.http.post<any>(url, projectId);
  }

  createProductRequest(
    requestId: any,
    product: ProductCreation
  ): Observable<any> {
    let url = Constant.PRODUCT_REQUEST_CREATE.replace("{requestId}", requestId);
    return this.http.post(url, product);
  }

  createProductAttachment(
    productVersionId: any,
    file: FileUpload
  ): Observable<any> {
    let url = Constant.PRODUCT_ATTACHMENT_REQUEST.replace(
      "{productVersionId}",
      productVersionId
    );
    return this.http.post(url, file);
  }

  createBranchRequest(requestId: any, branch: any): Observable<any> {
    let url = Constant.BRANCH_REQUEST_CREATE.replace("{requestId}", requestId);
    return this.http.post(url, branch);
  }

  createAttachmentRequest(requestId: any, attachment: any) {
    let url = Constant.ATTACHMENT_REQUEST_CREATE.replace(
      "{requestId}",
      requestId
    );
    return this.http.post(url, attachment);
  }

  sendProjectRequestForApproval(requestId: any): Observable<any> {
    let url = Constant.PROJECT_REQUEST_SEND_FOR_APPROVAL.replace(
      "{requestId}",
      requestId
    );
    return this.http.post<any>(url, {});
  }

  deleteAttachment(requestId: any, attachmentId: any): Observable<any> {
    let url = Constant.PROJECT_DELETE_ATTACHMENT.replace(
      "{requestId}",
      requestId
    );
    url = url.replace("{attachmentId}", attachmentId);

    return this.http.delete(url);
  }

  approveRequest(requestId: any) {
    let url = Constant.APPROVE_REQUEST.replace("{requestId}", requestId);

    return this.http.post(url, ["Approve"]);
  }

  rejectRequest(requestId: any) {
    let url = Constant.REJECT_REQUEST.replace("{requestId}", requestId);

    return this.http.post(url, ["Reject"]);
  }
}
