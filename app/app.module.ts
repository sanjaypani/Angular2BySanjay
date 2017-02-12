import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EmployeeListComponent } from './employee/employee-list.component'
import {employeeListFilterPipe} from "./employee/employee-list-filter.pipe";
import {StarComponent} from "../app/shared/star.component";

@NgModule({
  imports: [ BrowserModule],
  declarations: [ AppComponent, EmployeeListComponent , employeeListFilterPipe , StarComponent],
  bootstrap: [ AppComponent ],
  providers : [StarComponent , employeeListFilterPipe]
})
export class AppModule { }
