import { EditChangesComponent } from "./edit-requests/edit-changes/edit-changes.component";
import { AdminLandingComponent } from "./admin-landing/admin-landing.component";
import { AddPartnerComponent } from "./../core/components/add-partner/add-partner.component";
import { AddBranchComponent } from "./../core/components/add-branch/add-branch.component";
import { BranchInfoComponent } from "./../core/components/branch-info/branch-info.component";
import { LookupListComponent } from "./manage-lookups/lookup-list/lookup-list.component";
import { EditRequestsComponent } from "./edit-requests/edit-requests.component";
import { NewCommentsComponent } from "./new-comments/new-comments.component";
import { PosBranchesComponent } from "./pos-branches/pos-branches.component";
import { BankPartnersComponent } from "./bank-partners/bank-partners.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { ProjectsPageComponent } from "./projects-page/projects-page.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PartnerPageComponent } from "../core/components/partner-page/partner-page.component";
import { BranchDetailsComponent } from "../core/components/branch-details/branch-details.component";
import { ManageLookupsComponent } from "./manage-lookups/manage-lookups.component";
import { ProjectCommentsComponent } from "./new-comments/project-comments/project-comments.component";
import { AddProductComponent } from "../core/components/product-page/add-product/add-product.component";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
    children: [
      { path: "home", component: AdminLandingComponent },
      { path: "projects", component: ProjectsPageComponent },
      { path: "projects/:id", component: ProjectDetailsComponent },
      { path: "partners", component: BankPartnersComponent },
      { path: "partners/:id", component: PartnerPageComponent },
      { path: "add-partner", component: AddPartnerComponent },
      { path: "branches", component: PosBranchesComponent },
      { path: "branches/:id", component: BranchDetailsComponent },
      { path: "add-branch", component: AddBranchComponent },
      { path: "management", component: ManageLookupsComponent },
      { path: "management/:lookup", component: LookupListComponent },
      { path: "comments", component: NewCommentsComponent },
      { path: "comments/details", component: ProjectCommentsComponent },
      { path: "edit-requests", component: EditRequestsComponent },
      { path: "requests/:id", component: EditChangesComponent },
      {
        path: "projects/:projectId/add-product",
        component: AddProductComponent,
      },
      { path: "projects/:projectId/add-branch", component: AddBranchComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
