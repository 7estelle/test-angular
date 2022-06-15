import { Component, OnInit } from '@angular/core';
import employeesData from '../../assets/data/employees.json';
 
interface Employee {  
  FirstName: String;  
  SecondName: String;  
  Position: String;  
  Id: String;
  Details: String;  
  Blocked: boolean;  
}  
 
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {
  employees = employeesData;
  inputText = this.employees;
}
