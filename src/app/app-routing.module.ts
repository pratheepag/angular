import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
/*import { EmployeeModule } from './employee/employee.module';
import { SettingModule } from './setting/setting.module'; */
import { SettingComponent } from './setting/setting/setting.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeDeleteComponent } from './employee/employee-delete/employee-delete.component';

const appRoutes: Routes = [
	{ path:'employee', component: EmployeeComponent },
	{ path:'setting', component: SettingComponent },
  { path:'edit/:id', component: EmployeeAddComponent },
  { path:'delete/:id', component: EmployeeDeleteComponent }  
];

@NgModule({
  imports: [
   
	RouterModule.forRoot(appRoutes)

  ],
  exports : [RouterModule]
 
})
export class AppRoutingModule { }
