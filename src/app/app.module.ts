import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { VolunteerComponent } from './volunteer-list/volunteer/volunteer.component';

@NgModule({
  declarations: [AppComponent, VolunteerListComponent, VolunteerComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
