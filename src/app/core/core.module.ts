import { UpdateContactsComponent } from "./components/update-contacts/update-contacts.component";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarMenuComponent } from "./components/sidebar-menu/sidebar-menu.component";
import { CompanyInfoComponent } from "./components/company-info/company-info.component";
import { PageHeaderComponent } from "./components/page-header/page-header.component";
import { ActivityComponent } from "./components/activity/activity.component";
import { ProductsComponent } from "./components/products/products.component";
import { BranchesComponent } from "./components/branches/branches.component";
import { AttachmentsComponent } from "./components/attachments/attachments.component";
import { LocationComponent } from "./components/location/location.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { StatisticsCardComponent } from "./components/statistics-card/statistics-card.component";
import { PartnerInfoComponent } from "./components/partner-info/partner-info.component";
import { PartnerPageComponent } from "./components/partner-page/partner-page.component";
import { ProductsPageComponent } from "./components/products-page/products-page.component";
import { AddBranchComponent } from "./components/add-branch/add-branch.component";
import { ContactNumberComponent } from "./components/contact-number/contact-number.component";
import { DeliveryOptionsComponent } from "./components/delivery-options/delivery-options.component";
import { ProductInfoComponent } from "./components/product-page/product-info/product-info.component";
import { ProductPriceComponent } from "./components/product-page/product-price/product-price.component";
import { ProductDeliveryOptionsComponent } from "./components/product-page/product-delivery-options/product-delivery-options.component";
import { PageActionButtonsComponent } from "./components/page-action-buttons/page-action-buttons.component";
import { MapsComponent } from "./components/maps/maps.component";
import { GoogleMapsModule } from "@angular/google-maps";
import { InteractiveMapComponent } from "./components/interactive-map/interactive-map.component";
import { CookieService } from "ngx-cookie-service";
import { HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpLoaderFactory } from "../app.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BranchInfoComponent } from "./components/branch-info/branch-info.component";
import { AddPartnerComponent } from "./components/add-partner/add-partner.component";
import { BranchDetailsComponent } from "./components/branch-details/branch-details.component";
import { AddProductComponent } from "./components/product-page/add-product/add-product.component";
import { ViewProductComponent } from "./components/product-page/view-product/view-product.component";
import { MapProjectInfoComponent } from "./components/map-project-info/map-project-info.component";
import { AdvancedSearchComponent } from "./components/advanced-search/advanced-search.component";
import { MapStatisticsComponent } from "./components/map-statistics/map-statistics.component";
import { MapStatisticsDetailsComponent } from "./components/map-statistics-details/map-statistics-details.component";
import { LoginComponent } from "./components/login/login.component";
import { CreationMapComponent } from "./components/creation-map/creation-map.component";

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarMenuComponent,
    CompanyInfoComponent,
    PageHeaderComponent,
    ActivityComponent,
    ProductsComponent,
    BranchesComponent,
    AttachmentsComponent,
    LocationComponent,
    ContactsComponent,
    StatisticsCardComponent,
    PartnerInfoComponent,
    PartnerPageComponent,
    ProductsPageComponent,
    AddBranchComponent,
    ContactNumberComponent,
    DeliveryOptionsComponent,
    ProductInfoComponent,
    ProductPriceComponent,
    ProductDeliveryOptionsComponent,
    PageActionButtonsComponent,
    MapsComponent,
    InteractiveMapComponent,
    BranchInfoComponent,
    AddPartnerComponent,
    UpdateContactsComponent,
    BranchDetailsComponent,
    AddProductComponent,
    ViewProductComponent,
    MapProjectInfoComponent,
    AdvancedSearchComponent,
    MapStatisticsComponent,
    MapStatisticsDetailsComponent,
    LoginComponent,
    CreationMapComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    GoogleMapsModule,
    NgMultiSelectDropDownModule.forRoot(),
    TranslateModule.forChild(),
  ],
  providers: [CookieService],
  exports: [
    HeaderComponent,
    SidebarMenuComponent,
    CompanyInfoComponent,
    PageHeaderComponent,
    ActivityComponent,
    ProductsComponent,
    BranchesComponent,
    AttachmentsComponent,
    LocationComponent,
    ContactsComponent,
    CommonModule,
    StatisticsCardComponent,
    MapsComponent,
    DeliveryOptionsComponent,
    AddBranchComponent,
    BranchInfoComponent,
    UpdateContactsComponent,
    BranchDetailsComponent,
    ViewProductComponent,
    MapProjectInfoComponent,
    AdvancedSearchComponent,
    MapStatisticsComponent,
    MapStatisticsDetailsComponent,
    LoginComponent,
    InteractiveMapComponent,
    PageActionButtonsComponent,
    CreationMapComponent,
  ],
})
export class CoreModule {}
