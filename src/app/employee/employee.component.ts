import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 
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

  showVar: boolean = false;

  toggleChild(){
      this.showVar = !this.showVar;
  }
}
