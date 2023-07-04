import { LandingComponent } from "./landing/landing.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InteractiveMapComponent } from "./interactive-map/interactive-map.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
    children: [
      { path: "", component: InteractiveMapComponent },
      { path: "home", component: InteractiveMapComponent },
      { path: "details/:id", component: ProjectDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorRoutingModule {}
