import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeFilterComponent } from './employee/employee-filter.component';
import { EmployeeDetailComponent } from './employee/employee-detail.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [EmployeeComponent, EmployeeAddComponent, EmployeeDeleteComponent, EmployeeFilterComponent, EmployeeDetailComponent]
})
export class EmployeeModule { }
