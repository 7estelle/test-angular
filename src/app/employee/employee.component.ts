import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
 
export class EmployeeComponent {
  @Input() inputFromParent : Array<Employee>;
  @Input() index: number;
  constructor() { }

}
