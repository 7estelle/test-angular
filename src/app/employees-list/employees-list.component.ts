import { Component, OnInit } from '@angular/core';
import employees from '../../assets/data/employees.json'; 
import { EmployeeComponent } from '../employee/employee.component'; 

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

  name = 'Angular';  
    
  employees: Employee[] = employees; 

}
