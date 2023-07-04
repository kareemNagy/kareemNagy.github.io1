import { CoreModule } from "./../core/core.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VisitorHeaderComponent } from "./visitor-header/visitor-header.component";
import { VisitorFooterComponent } from "./visitor-footer/visitor-footer.component";
import { LandingComponent } from "./landing/landing.component";
import { VisitorRoutingModule } from "./visitor-routing.module";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { MainInfoComponent } from "./main-info/main-info.component";
import { ProjectAttachmentsComponent } from "./project-attachments/project-attachments.component";
import { ProjectProductsComponent } from "./project-products/project-products.component";
import { ProjectBranchesComponent } from "./project-branches/project-branches.component";
import { ProjectCommentsComponent } from "./project-comments/project-comments.component";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { InteractiveMapComponent } from "./interactive-map/interactive-map.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    VisitorHeaderComponent,
    VisitorFooterComponent,
    LandingComponent,
    ProjectDetailsComponent,
    MainInfoComponent,
    ProjectAttachmentsComponent,
    ProjectProductsComponent,
    ProjectBranchesComponent,
    ProjectCommentsComponent,
    InteractiveMapComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    VisitorRoutingModule,
    CoreModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
})
export class VisitorModule {}
