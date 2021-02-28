import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.css']
})
export class EmployeeFilterComponent implements OnInit {

  selectedFilter:string 

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectFilter(text:string):void{
    this.selectedFilter = text;
    this.newItemEvent.emit(this.selectedFilter);
    console.log(this.selectedFilter);
  }

}
