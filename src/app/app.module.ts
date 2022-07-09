import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import * as fr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { VolunteerListComponent } from "./volunteer-list/volunteer-list.component";
import { VolunteerComponent } from "./volunteer-list/volunteer/volunteer.component";

@NgModule({
  declarations: [AppComponent, VolunteerListComponent, VolunteerComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
