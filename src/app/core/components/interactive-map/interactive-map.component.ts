import { AfterViewInit, Component, OnInit } from "@angular/core";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { Category, SubCategory } from "src/app/core/models/category.model";
import { BranchService } from "src/app/core/services/branch.service";
import { DistrictService } from "src/app/core/services/district.service";
import { ActivityService } from "../../services/activity.service";
import { CategoryService } from "../../services/cateogry.service";
import { CityService } from "../../services/city.service";
@Component({
  selector: "app-interactive-map",
  templateUrl: "./interactive-map.component.html",
  styleUrls: ["./interactive-map.component.scss"],
})
export class InteractiveMapComponent implements OnInit, AfterViewInit {
  activities!: any[];
  selectedActivities: string[] = [];
  activitySettings!: any;
  activitySelectedValues: any[] = [];

  mainCategories!: any[];
  selectedCategories: string[] = [];
  categorySelectedValues: string[] = [];

  subCategories!: SubCategory[];
  selectedSubCategories: string[] = [];
  subCategorySelectedValues: string[] = [];

  categoriesSettings!: any;

  dropdownSettings!: IDropdownSettings;

  allBranches = this.branchService.getAllBranches();
  filteredBranches: any[] = [];

  advancedSearch: boolean = false;
  districts: any[] = [];
  selectedDistrictStatistics: any;
  districtDropdownSettings = {
    singleSelection: true,
    idField: "nameAr",
    textField: "nameAr",
    enableCheckAll: false,
    itemsShowLimit: 1,
    allowSearchFilter: true,
    searchPlaceholderText: "بحث",
  };
  districtSelectedValues: any[] = [];

  cityLocation = { lat: 24.742394, lng: 46.741473, zoom: 11.5 };
  districtLocation = { lat: 24.742394, lng: 46.741473, zoom: 8 };

  cities: any[] = [];
  selectedCities = [];
  citiesDropdownSettings = {
    singleSelection: true,
    idField: "nameAr",
    textField: "nameAr",
    enableCheckAll: false,
    itemsShowLimit: 1,
    allowSearchFilter: true,
    searchPlaceholderText: "بحث",
  };
  citySelectedValues: any[] = [];

  constructor(
    private categoryService: CategoryService,
    private activityService: ActivityService,
    private branchService: BranchService,
    private cityService: CityService,
    private districtService: DistrictService
  ) {}

  ngOnInit(): void {
    this.filteredBranches = this.allBranches;
    this.cities = this.cityService.getCities();
    this.districts = this.districtService.getDistricts();
    this.setActivitiesList();
  }

  ngAfterViewInit(): void {}

  setActivitiesList(): void {
    this.activities = this.activityService.getAllActivities();
    this.activitySettings = {
      singleSelection: false,
      idField: "id",
      textField: "nameAr",
      enableCheckAll: false,
      itemsShowLimit: 1,
      allowSearchFilter: true,
      searchPlaceholderText: "بحث",
    };
  }

  onActivitySelect(activity: any) {
    this.selectedActivities.push(activity.nameAr);
    this.mainCategories = [];
    this.mainCategories = this.categoryService.getCategoriesByActivity(
      this.selectedActivities
    );
    this.getBranchesByActivities();
    this.initMainCategoriesDropdown();
    this.categorySelectedValues = [];
    this.subCategorySelectedValues = [];
  }

  onActivityDeSelect(activity: any) {
    this.selectedActivities = this.selectedActivities.filter(
      (item) => item != activity.nameAr
    );
    this.getBranchesByActivities();
    this.mainCategories = [];
    this.mainCategories = this.categoryService.getCategoriesByActivity(
      this.selectedActivities
    );
    this.categorySelectedValues = [];
    this.subCategorySelectedValues = [];
  }

  initMainCategoriesDropdown() {
    this.categoriesSettings = {
      singleSelection: false,
      idField: "id",
      textField: "nameAr",
      enableCheckAll: false,
      itemsShowLimit: 1,
      allowSearchFilter: true,
      searchPlaceholderText: "بحث",
    };
  }

  onMainCategorySelect(mainCategory: any) {
    let category = this.categoryService.getCategoryByName(mainCategory.nameAr);
    if (category) {
      this.selectedCategories.push(mainCategory.nameAr);
      this.subCategories = [];
      this.subCategories = this.subCategories.concat(category.subCategories);
    }
    this.getBranchesByCategories();
    this.subCategorySelectedValues = [];
  }

  onMainCategoryDeSelect(mainCategory: any) {
    this.selectedCategories = this.selectedCategories.filter(
      (item) => item != mainCategory.nameAr
    );
    console.log(this.selectedCategories);
    this.subCategories = [];
    this.subCategories = this.categoryService.getSubCategoriesByCategories(
      this.selectedCategories
    );
    this.getBranchesByCategories();
    this.subCategorySelectedValues = [];
  }

  getBranchesByActivities() {
    this.filteredBranches = [];
    this.filteredBranches = this.branchService.getBranchesByActivities(
      this.selectedActivities
    );
  }

  getBranchesByCategories() {
    this.filteredBranches = [];
    this.filteredBranches = this.branchService.getBranchesByCategories(
      this.selectedCategories,
      this.selectedActivities
    );
  }

  toggleAdvancedSearch() {
    this.advancedSearch = !this.advancedSearch;
    if (this.advancedSearch) {
      this.activitySelectedValues = [];
      this.districtSelectedValues = [];
      this.citySelectedValues = [];
    } else {
      this.filteredBranches = this.allBranches;
    }
  }

  onDistrictSelect(selectedDistrict: any): void {
    this.getFilteredBranches();
    this.filteredBranches = this.branchService.getBranchesByDistrict(
      selectedDistrict.nameAr,
      this.filteredBranches
    );
    let district = this.districtService.getDistrictByName(
      selectedDistrict.nameAr
    );
    this.cities = this.cityService.getCitiesByDistrict(district.nameAr);
    this.districtLocation = {
      lat: Number(district.longitude),
      lng: Number(district.latitude),
      zoom: 8,
    };
  }

  onDistrictDeSelect() {
    this.cities = this.cityService.getCities();
    this.getFilteredBranches();
  }

  getFilteredBranches() {
    this.filteredBranches = [];
    if (this.selectedActivities.length > 0) {
      this.filteredBranches = this.branchService.getBranchesByActivities(
        this.selectedActivities
      );
    }
    if (this.selectedCategories.length > 0) {
      this.filteredBranches = this.branchService.getBranchesByCategories(
        this.selectedCategories,
        this.selectedActivities
      );
    }
    if (this.selectedSubCategories.length > 0) {
      this.filteredBranches = this.branchService.getBranchesBySubCategories(
        this.selectedSubCategories,
        this.selectedCategories,
        this.selectedActivities
      );
    }
    if (this.filteredBranches.length == 0) {
      this.filteredBranches = this.allBranches;
    }
  }

  onCitySelect(cityNameAr: any) {
    let city = this.cityService.getCityByName(cityNameAr.nameAr);
    this.cityLocation = {
      lat: Number(city.longitude),
      lng: Number(city.latitude),
      zoom: 11.5,
    };
  }

  updateFilteredBranches(filteredBranches: any[]) {
    this.filteredBranches = filteredBranches;
  }

  closeAdvancedSearch() {
    this.advancedSearch = false;
  }

  updateDistrict(district: any) {
    this.districtLocation = district;
  }

  updateCity(city: any) {
    this.cityLocation = city;
  }

  onDistrictStatisticsSelect(district: any) {
    district = (district.target as HTMLInputElement).value;
    let districtObject = this.districtService.getDistrictByName(district);
    this.selectedDistrictStatistics = districtObject;
  }
}
