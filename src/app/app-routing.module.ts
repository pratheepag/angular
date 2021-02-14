import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
/*import { EmployeeModule } from './employee/employee.module';
import { SettingModule } from './setting/setting.module'; */
import { SettingComponent } from './setting/setting/setting.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';

const appRoutes: Routes = [
	{ path:'employee', component: EmployeeComponent },
	{ path:'setting', component: SettingComponent },
  { path:'employee-add', component: EmployeeAddComponent }
];

@NgModule({
  imports: [
   
	RouterModule.forRoot(appRoutes)

  ],
  exports : [RouterModule]
 
})
export class AppRoutingModule { }
