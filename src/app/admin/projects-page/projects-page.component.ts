import { ProjectResponse } from "./../../core/models/project.model";
import { Category, SubCategory } from "src/app/core/models/category.model";
import { Activity } from "./../../core/models/activity.model";
import { LookUpsTmpService } from "./../../core/services/lookup.service";
import { ActivityService } from "./../../core/services/activity.service";
import { CategoryService } from "./../../core/services/cateogry.service";
import { ProjectService } from "./../../core/services/project.service";
import { Component, OnInit } from "@angular/core";
import { Project } from "src/app/core/models/project.model";
import { ProjectInfo } from "src/app/core/models/project-info.model";

@Component({
  selector: "app-projects-page",
  templateUrl: "./projects-page.component.html",
  styleUrls: ["./projects-page.component.scss"],
})
export class ProjectsPageComponent implements OnInit {
  projects: Project[] = [];
  projectResponse!: ProjectResponse;
  pages: number[] = [1, 2];
  currentPage: number = 1;

  activities!: Activity[];
  categories!: Category[];
  subCategories!: SubCategory[];
  subCategoriesEnabled = false;

  constructor(
    private projectService: ProjectService,
    private categoryService: CategoryService,
    private activityService: ActivityService,
    private lookUpsTmpService: LookUpsTmpService
  ) {}

  ngOnInit(): void {
    this.getAllProjects();
    this.initLookUps();
  }

  getAllProjects(): void {
    this.projectService
      .getAllProjects(
        undefined,
        undefined,
        undefined,
        undefined,
        this.currentPage
      )
      .subscribe((projects) => {
        this.projects = [];
        this.projects = projects.Rows;
        this.projectResponse = projects;
        this.setPagesArray(projects.PaginationInfo.TotalPagesCount);
      });
  }

  setPagesArray(pagesCount: number) {
    this.pages = Array(pagesCount)
      .fill(0)
      .map((x, i) => i);
  }

  initLookUps(): void {
    this.setAllActivities();
    this.setAllCategories();
  }

  setAllActivities(): void {
    this.lookUpsTmpService
      .getAllActivities()
      .subscribe((activities: Activity[]) => {
        this.activities = activities;
      });
  }

  setAllCategories(): void {
    this.lookUpsTmpService
      .getAllCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
  }

  setAllSubCategories(): void {
    this.lookUpsTmpService
      .getAllSubCategories()
      .subscribe((subCategories: SubCategory[]) => {
        this.subCategories = subCategories;
      });
  }

  filterByActivities(activity: any) {
    this.projects = [];
    activity = (activity.target as HTMLInputElement).value;
    this.projectService
      .getAllProjects(undefined, activity, undefined, undefined)
      .subscribe((projects) => {
        this.projects = projects.Rows;
      });
  }

  filterByCategoryAndSetSubCategories(category: any) {
    this.subCategories = [];
    this.subCategoriesEnabled = false;
    this.projects = [];
    category = (category.target as HTMLInputElement).value;
    this.projectService
      .getAllProjects(undefined, undefined, category, undefined)
      .subscribe((projects) => {
        this.projects = projects.Rows;
      });
    this.lookUpsTmpService
      .getSubCategoriesByCategoryId(category)
      .subscribe((subCategories: SubCategory[]) => {
        this.subCategories = subCategories;
        this.subCategoriesEnabled = false;
      });
  }

  filterBySubCategory(subCategory: any) {
    this.projects = [];
    subCategory = (subCategory.target as HTMLInputElement).value;
    this.projectService
      .getAllProjects(undefined, undefined, undefined, subCategory)
      .subscribe((projects) => {
        this.projects = projects.Rows;
      });
  }

  searchProjects(name: any) {
    let searchText = (name.target as HTMLInputElement).value;
    if (searchText === "") {
      this.getAllProjects();
    }
    if (searchText.length > 2) {
      this.projects = [];
      this.projectService.getAllProjects(searchText).subscribe((projects) => {
        this.projects = projects.Rows;
      });
    }
  }

  nextPage() {
    if (this.pages.length > this.currentPage) {
      this.currentPage++;
      this.getAllProjects();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getAllProjects();
    }
  }

  selectPage(page: number) {
    this.currentPage = page;
    this.getAllProjects();
  }

  filterProjects() {}
}
