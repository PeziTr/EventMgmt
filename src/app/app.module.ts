import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FindPhotographersComponent } from './find-photographers/find-photographers.component';
import { ListViewLayout } from './pin-layout/pin-layout.component';
import {GetPhotographerInfo} from './photo.service';
//import { AngularMultiSelectModule } from 'angular2-multiselect-checkbox-dropdown/angular2-multiselect-dropdown';
import { StarRatingModule } from 'angular-star-rating';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {HttpClientModule} from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    FindPhotographersComponent,
    ListViewLayout
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    InfiniteScrollModule,
    //AngularMultiSelectModule,
    StarRatingModule.forRoot()

  ],
  providers: [GetPhotographerInfo],
  bootstrap: [AppComponent]
})
export class AppModule { }
