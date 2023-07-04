import { TranslateModule } from "@ngx-translate/core";
import { CoreModule } from "./../core/core.module";
import { NgModule } from "@angular/core";
import { ProjectInfoComponent } from "./project-info/project-info.component";
import { ClientRoutingModule } from "./client-routing.module";
import { ClientStatisticsComponent } from "./client-statistics/client-statistics.component";
import { ClientPartnersComponent } from "./client-partners/client-partners.component";
import { DeliveryPartnersComponent } from "./delivery-partners/delivery-partners.component";
import { ServicePartnersComponent } from "./service-partners/service-partners.component";
import { HomepageComponent } from "./homepage.component";
import { ProjectCommentsComponent } from "./project-comments/project-comments.component";

@NgModule({
  declarations: [
    ProjectInfoComponent,
    ClientStatisticsComponent,
    ClientPartnersComponent,
    DeliveryPartnersComponent,
    ServicePartnersComponent,
    HomepageComponent,
    ProjectCommentsComponent,
  ],
  imports: [CoreModule, ClientRoutingModule, TranslateModule.forChild()],
})
export class ClientModule {}
