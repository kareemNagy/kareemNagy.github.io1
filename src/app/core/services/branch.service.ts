import { BranchResponse } from "./../models/branch-response.model";
import { Branch } from "./../models/branch.model";
import { Store } from "./../models/store.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Constant } from "../utils/constant";
import { Branches } from "../models/branches.model";

@Injectable({
  providedIn: "root",
})
export class BranchService {
  constructor(private http: HttpClient) {}

  getBankBranches(
    pageNumber?: number,
    pageSize: number = 150
  ): Observable<BranchResponse> {
    let httpParams = new HttpParams();
    let url = Constant.BANK_BRANCHES;
    if (pageNumber) {
      httpParams = httpParams.append("PageInfo.PageIndex", pageNumber);
    }
    httpParams = httpParams.append("PageInfo.PageSize", pageSize);
    return this.http.get<BranchResponse>(url, { params: httpParams });
  }

  getBranchById(id: number): Observable<Branch> {
    let url = Constant.BRANCH_INFO.replace("{storeId}", id + "");
    return this.http.get<Branch>(url);
  }

  getAllBranches(): any[] {
    
    return Branches.branches
  }

  getBranchesByActivities(activities: string[]): any[] {
    let allBranches = this.getAllBranches();
    let filteredBranches = [];

    if (activities.length == 0) {
      return allBranches;
    }

    filteredBranches = allBranches.filter((branch) =>
      activities.includes(branch.activity)
    );
    return filteredBranches;
  }

  getBranchesByCategories(categories: string[], activities: string[]): any[] {
    let allBranches = this.getAllBranches();
    let filteredBranches = [];

    if (categories.length == 0) {
      return this.getBranchesByActivities(activities);
    }

    filteredBranches = allBranches.filter((branch) =>
      categories.includes(branch.category)
    );
    return filteredBranches;
  }

  getBranchesBySubCategories(
    subCategories: string[],
    categories: string[],
    activities: string[]
  ) {
    let allBranches = this.getAllBranches();
    let filteredBranches = [];

    if (subCategories.length == 0) {
      return this.getBranchesByCategories(categories, activities);
    }

    filteredBranches = allBranches.filter((branch) =>
      subCategories.includes(branch.subCategory)
    );
    return filteredBranches;
  }

  getBranchesByDistrict(district: string, filteredBranches: any[]): any[] {
    let districtBrances: any[] = [];
    filteredBranches.forEach((branch) => {
      if (branch.district == district) {
        districtBrances.push(branch);
      }
    });

    return districtBrances;
  }

  addBranch(branch: Branch) {
    let url = Constant.BRANCH_CREATION_URL;
    return this.http.post(url, branch);
  }

  deleteBranch(branchId: number) {
    let url = Constant.BRANCH_DELETE.replace("{branchId}", branchId + "");
    return this.http.delete(url);
  }
}
