import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Project, ProjectResponse } from "../models/project.model";
import { Observable } from "rxjs";
import { Constant } from "../utils/constant";
import { ProjectInfo } from "../models/project-info.model";
@Injectable({
  providedIn: "root",
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getProject(projectId: number): Observable<Project> {
    let url = Constant.PROJECT_INFO.replace("{projectId}", projectId + "");
    return this.http.get<Project>(url);
  }

  getAllProjects(
    name?: string,
    activity?: string,
    category?: string,
    subCategory?: string,
    pageNumber?: number,
    pageSize: number = 150
  ): Observable<ProjectResponse> {
    let httpParams = new HttpParams();
    let url = Constant.PROJECT_LIST;
    if (name) {
      httpParams = httpParams.append("NameAr", name);
      httpParams = httpParams.append("NameEr", name);
    }
    if (activity) {
      httpParams = httpParams.append("ActivityId", activity);
    }
    if (category) {
      httpParams = httpParams.append("CategoryId", category);
    }
    if (subCategory) {
      httpParams = httpParams.append("SubCategoryId", subCategory);
    }
    if (pageNumber) {
      httpParams = httpParams.append("PageInfo.PageIndex", pageNumber);
    }
    // httpParams = httpParams.append("PageInfo.PageSize", pageSize);
    return this.http.get<ProjectResponse>(url, { params: httpParams });
  }

  uploadProjectFiles(projectId: number, files: any[]) {
    let url = Constant.PROJECT_UPLOAD_MULTIPLE_FILES_URL.replace(
      "{projectId}",
      projectId + ""
    );
    return this.http.post<any>(url, files);
  }
}
