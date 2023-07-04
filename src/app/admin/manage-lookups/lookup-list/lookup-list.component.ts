import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Activity } from "src/app/core/models/activity.model";
import { Category, SubCategory } from "src/app/core/models/category.model";
import { ActivityService } from "src/app/core/services/activity.service";
import { CategoryService } from "src/app/core/services/cateogry.service";
import { LookUpsTmpService } from "src/app/core/services/lookup.service";
import { ProjectService } from "src/app/core/services/project.service";

@Component({
  selector: "app-lookup-list",
  templateUrl: "./lookup-list.component.html",
  styleUrls: ["./lookup-list.component.scss"],
})
export class LookupListComponent implements OnInit {
  activities!: Activity[];
  categories!: Category[];
  subCategories!: SubCategory[];
  showCategories = false;
  showSubCategories = false;
  showActivities = false;
  currentLookup: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private lookUpsTmpService: LookUpsTmpService
  ) {
    this.route.params.subscribe((params) => {
      if (params["lookup"] === "categories") {
        this.showCategories = true;
      } else if (params["lookup"] === "subcategories") {
        this.showSubCategories = true;
      } else {
        this.showActivities = true;
      }
    });
  }

  ngOnInit(): void {
    this.initLookUps();
  }

  initLookUps(): void {
    this.setAllActivities();
    this.setAllCategories();
    this.setAllSubCategories();
  }

  setAllActivities(): void {
    this.lookUpsTmpService
      .getAllActivities()
      .subscribe((activities: Activity[]) => {
        this.activities = activities;
        if (this.showActivities) {
          this.currentLookup = this.activities;
          this.initLookUp();
        }
      });
  }

  setAllCategories(): void {
    this.lookUpsTmpService
      .getAllCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        if (this.showCategories) {
          this.currentLookup = this.categories;
          this.initLookUp();
        }
      });
  }

  setAllSubCategories(): void {
    this.lookUpsTmpService
      .getAllSubCategories()
      .subscribe((subCategories: SubCategory[]) => {
        this.subCategories = subCategories;
        if (this.showSubCategories) {
          this.currentLookup = this.subCategories;
          this.initLookUp();
        }
      });
  }

  initLookUp() {
    this.currentLookup.forEach((lookup) => (lookup.editable = false));
  }

  editLookUp(lookup: any) {
    lookup.editable = true;
    console.log(lookup);
  }

  deleteLookUp(lookup: any) {
    console.log(lookup);
  }

  updateLookup(value: any, lookup: any) {
    if (this.showActivities) {
      lookup.tempNameAr = (value.target as HTMLInputElement).value;
    } else {
      lookup.tempName_Ar = (value.target as HTMLInputElement).value;
    }
  }

  saveChanges(lookup: any) {
    lookup.editable = false;
    if (this.showActivities) {
      lookup.NameAr = lookup.tempNameAr;
      this.lookUpsTmpService.updateActivity(lookup).subscribe((data) => {
        console.log(data);
      });
    } else if (this.showCategories) {
      lookup.Name_Ar = lookup.tempName_Ar;
      this.lookUpsTmpService.updateCategory(lookup).subscribe((data) => {
        console.log(data);
      });
    } else {
      this.lookUpsTmpService.updateSubCategory(lookup).subscribe((data) => {
        console.log(data);
      });
    }
    console.log(lookup);
  }
}
