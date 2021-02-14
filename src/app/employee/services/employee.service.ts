import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IEmployee } from '../models/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient : HttpClient) { }

  baseurl = "http://localhost:3000/employees";

  getEmployee(id:number):Observable<IEmployee>{
    return this.httpClient.get<IEmployee>(`${this.baseurl}/${id}`, {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    });
  }

  getEmployees() : Observable<IEmployee[]>{
      return this.httpClient.get<IEmployee[]>(this.baseurl);
    //        .pipe(catchError(handleError));
  }

  saveEmployee(employee:IEmployee): Observable<IEmployee>{
    if(employee.id === null){
        return this.httpClient.post<IEmployee>('http://localhost:3000/employees', employee, {
          headers: new HttpHeaders({
            'Content-Type' : 'application/json'
          })
      });
    }
  }
  updateEmployee(employee:IEmployee): Observable<void>{
      return this.httpClient.put<void>(`${this.baseurl}/${employee.id}`, employee, {
          headers: new HttpHeaders({
            'Content-Type' : 'application/json'
          })
      });
  }
  private handleError(errorResponse : HttpErrorResponse){
    
  }
}