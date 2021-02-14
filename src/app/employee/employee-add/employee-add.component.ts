import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from '../models/IEmployee';
import { EmployeeService } from '../services/employee.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employee : IEmployee = {
    id : null,
    name: null,
    gender: null
  };

  constructor(private employeeService : EmployeeService,
    private _router : Router, private navigateRoute : ActivatedRoute) { }

  ngOnInit() {
    this.navigateRoute.paramMap.subscribe(params => {
      var id = +params.get('id');
      this.employeeService.getEmployee(id).subscribe(
        (employee) => this.employee = employee,
        (err: any) => console.log(err)
      );
    });
  }

  saveEmployee(empForm : NgForm) : void{
    if(this.employee.id === null){
      this.employeeService.saveEmployee(this.employee).subscribe(result =>{
        console.log(result);
      });
    }else{
      this.employeeService.updateEmployee(this.employee).subscribe(() =>{
        //console.log();
      });
    }
    this._router.navigate(['/employee']);
  }

}
