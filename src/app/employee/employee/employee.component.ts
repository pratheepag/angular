import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/IEmployee';
import { EmployeeService } from '../services/employee.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  private employeeList: IEmployee[];

  constructor(private employeeService: EmployeeService, private __router: Router) { }

  ngOnInit() {
    this.getEmployeesList();
  }

  getEmployeesList() {
    console.log(this.employeeService.getEmployees());
    this.employeeService.getEmployees().subscribe(result => {
      
      this.employeeList = result;
      console.log(this.employeeList)
    });
  }
  editEmployee(id){
      console.log(id);
      //this.__router.navigate(['/edit', id]);
  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe( result => {
      console.log("Employee Deleted");
    });
  }
  filterChange($event){
    console.log("parent="+$event);
  }

}
