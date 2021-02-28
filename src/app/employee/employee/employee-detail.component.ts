import { Component, Input, OnInit } from '@angular/core';
import { EmployeeModule } from '../employee.module';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input()
  employee = EmployeeModule;

  constructor() { }

  ngOnInit() {
  }

}
