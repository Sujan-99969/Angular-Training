import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeinfoService {

  constructor(private httpref : HttpClient) { }
  public GetEmployees() : Observable<Employee[]>
  {
   return this.httpref.get<Employee[]>("https://jsonplaceholder.typicode.com/users");
  }
}
