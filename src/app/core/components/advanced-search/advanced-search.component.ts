import { IDropdownSettings } from "ng-multiselect-dropdown";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { SubCategory } from "../../models/category.model";
import { ActivityService } from "../../services/activity.service";
import { BranchService } from "../../services/branch.service";
import { CategoryService } from "../../services/cateogry.service";
import { CityService } from "../../services/city.service";
import { DistrictService } from "../../services/district.service";

@Component({
  selector: "app-advanced-search",
  templateUrl: "./advanced-search.component.html",
  styleUrls: ["./advanced-search.component.scss"],
})
export class AdvancedSearchComponent implements OnInit {
  @Output() filteredBranchesUpdated = new EventEmitter<any>();
  @Output() districtSelected = new EventEmitter<any>();
  @Output() citySelected = new EventEmitter<any>();
  @Output() closeAdvancedSearch = new EventEmitter<any>();

  activities!: any[];
  selectedActivities: string[] = [];
  activitySettings!: any;

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
  districtDropdownSettings = {
    singleSelection: true,
    idField: "nameAr",
    textField: "nameAr",
    enableCheckAll: false,
    itemsShowLimit: 1,
    allowSearchFilter: true,
    searchPlaceholderText: "بحث",
  };

  cityLocation = { lat: 24.742394, lng: 46.741473, zoom: 11.5 };
  districtLocation = { lat: 24.742394, lng: 46.741473, zoom: 5 };

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
  constructor(
    private categoryService: CategoryService,
    private activityService: ActivityService,
    private branchService: BranchService,
    private cityService: CityService,
    private districtService: DistrictService
  ) {}

  ngOnInit(): void {
    this.cities = this.cityService.getCities();
    this.districts = this.districtService.getDistricts();
    this.setActivitiesList();
  }

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
    this.subCategories = [];
    this.subCategories = this.categoryService.getSubCategoriesByCategories(
      this.selectedCategories
    );
    this.getBranchesByCategories();
    this.subCategorySelectedValues = [];
  }

  onSubCategorySelect(subCategory: any) {
    if (subCategory) {
      this.selectedSubCategories.push(subCategory.nameAr);
    }
    this.getBranchesBySubCategories();
  }

  onSubCategoryDeSelect(subCategory: any) {
    this.selectedSubCategories = this.selectedSubCategories.filter(
      (item) => item != subCategory.nameAr
    );
    this.getBranchesBySubCategories();
  }

  getBranchesByActivities() {
    this.filteredBranches = [];
    this.filteredBranches = this.branchService.getBranchesByActivities(
      this.selectedActivities
    );
    this.filteredBranchesUpdated.emit(this.filteredBranches);
  }

  getBranchesByCategories() {
    this.filteredBranches = [];
    this.filteredBranches = this.branchService.getBranchesByCategories(
      this.selectedCategories,
      this.selectedActivities
    );
    this.filteredBranchesUpdated.emit(this.filteredBranches);
  }

  getBranchesBySubCategories() {
    this.filteredBranches = [];
    this.filteredBranches = this.branchService.getBranchesBySubCategories(
      this.selectedSubCategories,
      this.selectedCategories,
      this.selectedActivities
    );
    this.filteredBranchesUpdated.emit(this.filteredBranches);
  }

  toggleAdvancedSearch() {
    this.advancedSearch = !this.advancedSearch;
  }

  onDistrictSelect(selectedDistrict: any): void {
    selectedDistrict = (selectedDistrict.target as HTMLInputElement).value;
    let district = this.districtService.getDistrictByName(selectedDistrict);
    this.cities = this.cityService.getCitiesByDistrict(district.nameAr);
    this.districtLocation = {
      lat: Number(district.longitude),
      lng: Number(district.latitude),
      zoom: 8,
    };
    this.districtSelected.emit(this.districtLocation);
  }

  onDistrictDeSelect() {
    this.cities = this.cityService.getCities();
  }

  onCitySelect(selectedCity: any) {
    selectedCity = (selectedCity.target as HTMLInputElement).value;
    let city = this.cityService.getCityByName(selectedCity);
    this.cityLocation = {
      lat: Number(city.longitude),
      lng: Number(city.latitude),
      zoom: 11.5,
    };
    this.citySelected.emit(this.cityLocation);
  }

  closePopUp() {
    this.closeAdvancedSearch.emit();
  }
}
