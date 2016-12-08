import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { Ng2UploaderModule } from 'ng2-uploader';
import { SelectModule } from 'ng2-select';


import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';

import { DealService } from './deal.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UploadComponent } from './upload.component.ts';
import { ListComponent } from './list.component';
import { SimpleHTTPComponent } from './components/SimpleHTTPComponent';
import { HttpService } from "./http.service";
import { HTTPComponent } from "./http.component";
import { Autosize } from "angular2-autosize/angular2-autosize";
import {TasksComponent} from "./tasks.component";
import {TaskService} from "./task.service";





@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    Ng2UploaderModule,
    SelectModule
  ],
  declarations: [
    AppComponent,
    routedComponents,
    UploadComponent,
    ListComponent,
    SimpleHTTPComponent,
    HTTPComponent,
    Autosize,
    TasksComponent
  ],
  providers: [
    DealService,
    AUTH_PROVIDERS,
    AuthService,
    AuthGuard,
    HttpService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
