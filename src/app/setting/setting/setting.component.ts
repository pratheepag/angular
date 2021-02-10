import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  employeeForm:FormGroup;
  constructor() { }

  ngOnInit() {
	  this.employeeForm = new FormGroup({
		  fullName : new FormControl(),
		  email: new FormControl()
	  });
  }
  
  onSubmit():void{
	  console.log(this.employeeForm.value);
  }

}
