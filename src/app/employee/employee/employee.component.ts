import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/IEmployee';
import { EmployeeService } from '../services/employee.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  private employeeList: IEmployee[];

  constructor(private employeeService: EmployeeService) { }

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
  editEmployee(){
  }

}
