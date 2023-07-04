import { Activity } from "./../models/activity.model";
import { HttpClient } from "@angular/common/http";
import { SubCategory } from "./../models/category.model";
import { Injectable } from "@angular/core";
import { Category } from "../models/category.model";
import { Constant } from "../utils/constant";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LookUpsTmpService {
  constructor(private http: HttpClient) {}

  getAllActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(Constant.ALL_ACTIVITIES);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(Constant.ALL_CATEGORIES);
  }

  getAllSubCategories(): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(Constant.ALL_SUBCATEGORIES);
  }

  getSubCategoriesByCategoryId(categoryId: any): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(
      Constant.SUBCATEGORY_BY_CATEGORYID + categoryId
    );
  }

  updateCategory(category: any) {
    return this.http.put(
      Constant.CATEGORY_UPDATE.replace("{categoryId}", category.Id),
      category
    );
  }

  updateSubCategory(subCategory: any) {
    return this.http.put(
      Constant.SUBCATEGORY_UPDATE.replace("{subCategoryId}", subCategory.Id),
      subCategory
    );
  }

  updateActivity(activity: any) {
    return this.http.put(
      Constant.ACTIVITY_UPDATE.replace("{activityId}", activity.Id),
      activity
    );
  }
}
