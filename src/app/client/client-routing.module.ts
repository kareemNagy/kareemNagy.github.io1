import { ProjectCommentsComponent } from "./project-comments/project-comments.component";
import { ViewProductComponent } from "./../core/components/product-page/view-product/view-product.component";
import { AddProductComponent } from "./../core/components/product-page/add-product/add-product.component";
import { InteractiveMapComponent } from "./../core/components/interactive-map/interactive-map.component";
import { AddBranchComponent } from "./../core/components/add-branch/add-branch.component";
import { PartnerPageComponent } from "./../core/components/partner-page/partner-page.component";
import { ClientPartnersComponent } from "./client-partners/client-partners.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectInfoComponent } from "./project-info/project-info.component";
import { HomepageComponent } from "./homepage.component";
import { BranchDetailsComponent } from "../core/components/branch-details/branch-details.component";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
    children: [
      { path: "profile", component: ProjectInfoComponent },
      { path: "partners", component: ClientPartnersComponent },
      { path: "partners/:id", component: PartnerPageComponent },
      { path: "branches/:id", component: BranchDetailsComponent },
      { path: "products/:id", component: ViewProductComponent },
      {
        path: "projects/:projectId/add-product",
        component: AddProductComponent,
      },
      { path: "projects/:projectId/add-branch", component: AddBranchComponent },
      {
        path: "projects/:projectId/comments",
        component: ProjectCommentsComponent,
      },
      { path: "map", component: InteractiveMapComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
