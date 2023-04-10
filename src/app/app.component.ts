import { Component, OnInit } from '@angular/core';
import { EmployeeinfoService } from './employeeinfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angula_training';
  empllist : any ;
  constructor(public serviceres : EmployeeinfoService){}
  
ngOnInit(){
this.serviceres.GetEmployees().subscribe();
(res:any) =>
{
  debugger;
  this.empllist = res.data
  console.log(this.empllist)
}

}
}
