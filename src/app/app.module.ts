import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EventdetailsformComponent } from './eventdetailsform/eventdetailsform.component';
import { EventPlannerService } from './services/app.myEventServices';
import { AreaselectorComponent } from './areaselector/areaselector.component';
import { ModalModule } from 'ngx-bootstrap';
import { RegserviceproviderComponent } from './regserviceprovider/regserviceprovider.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-checkbox-dropdown/angular2-multiselect-dropdown';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'selectarea',      component: AreaselectorComponent },
  { path: 'getservice',      component: EventdetailsformComponent },
  { path: 'registerservice',      component: RegserviceproviderComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    EventdetailsformComponent,
    AreaselectorComponent,
    RegserviceproviderComponent,
    HomepageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    AngularMultiSelectModule
  ],
  providers:  [EventPlannerService],
  bootstrap:  [AppComponent]
})
export class AppModule { }
