import { FormsModule } from "@angular/forms";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomepageComponent } from "./homepage/homepage.component";
import { AdminStatisticsComponent } from "./admin-statistics/admin-statistics.component";
import { CoreModule } from "../core/core.module";
import { ProjectsPageComponent } from "./projects-page/projects-page.component";
import { BankPartnersComponent } from "./bank-partners/bank-partners.component";
import { PosBranchesComponent } from "./pos-branches/pos-branches.component";
import { ManageLookupsComponent } from "./manage-lookups/manage-lookups.component";
import { LookupListComponent } from "./manage-lookups/lookup-list/lookup-list.component";
import { EditRequestsComponent } from "./edit-requests/edit-requests.component";
import { EditChangesComponent } from "./edit-requests/edit-changes/edit-changes.component";
import { NewCommentsComponent } from "./new-comments/new-comments.component";
import { ProjectCommentsComponent } from "./new-comments/project-comments/project-comments.component";
import { TranslateModule } from "@ngx-translate/core";
import { AdminLandingComponent } from "./admin-landing/admin-landing.component";
import { ActivityRequestComponent } from "./edit-requests/activity/activity.component";
import { AttachmentsRequestComponent } from "./edit-requests/attachments/attachments.component";
import { BranchesRequestComponent } from "./edit-requests/branches/branches.component";
import { CompanyInfoRequestComponent } from "./edit-requests/company-info/company-info.component";
import { ContactsRequestComponent } from "./edit-requests/contacts/contacts.component";
import { LocationRequestComponent } from "./edit-requests/location/location.component";
import { ProductsRequestComponent } from "./edit-requests/products/products.component";

@NgModule({
  declarations: [
    ActivityRequestComponent,
    AttachmentsRequestComponent,
    BranchesRequestComponent,
    CompanyInfoRequestComponent,
    ContactsRequestComponent,
    LocationRequestComponent,
    ProductsRequestComponent,
    HomepageComponent,
    AdminStatisticsComponent,
    ProjectsPageComponent,
    ProjectDetailsComponent,
    BankPartnersComponent,
    PosBranchesComponent,
    ManageLookupsComponent,
    LookupListComponent,
    EditRequestsComponent,
    EditChangesComponent,
    NewCommentsComponent,
    ProjectCommentsComponent,
    AdminLandingComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    AdminRoutingModule,
    TranslateModule.forChild(),
  ],
})
export class AdminModule {}
