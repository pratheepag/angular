import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { SettingModule } from './setting/setting.module';
import { AppRoutingModule } from './/app-routing.module';
//import { EmployeeDetailComponent } from './employee/employee/employee-detail.component';
//import { EmployeeFilterComponent } from './employee/employee/employee-filter.component';

@NgModule({
  declarations: [
    AppComponent,
  //  EmployeeDetailComponent,
   // EmployeeFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EmployeeModule,
    SettingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
