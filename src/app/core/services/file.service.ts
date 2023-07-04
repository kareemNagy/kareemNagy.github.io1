import { Constant } from "./../utils/constant";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FileService {
  constructor(private http: HttpClient) {}

  uploadFile(files: any) {
    let url = Constant.FILE_UPLOAD;
    const formData = new FormData();
    formData.append("_file", files[0]);
    return this.http.post<string>(url, formData);
  }
}
