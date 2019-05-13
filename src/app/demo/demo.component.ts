import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  // set property and method for ngStyle demo
  public employeeList: any = [
    {'name': 'Rahul Shah', 'department': 'Engineering'},
    {'name': 'Sanjay Modi', 'department': 'Admin'},
    {'name': 'Ashish upadhyay', 'department': 'Engineering'},
    {'name': 'Akash Patel', 'department': 'HR'},
    {'name': 'Narendra Gajjar', 'department': 'Admin'}
  ];
  public getColor(deparment): string {
    switch(deparment){
      case 'Engineering' : return 'green';
      case 'Admin' : return 'blue';
      case 'HR' : return 'red';
    }
  }

  // set properties for ngClass demo
  public isBoldTextSelected: boolean = false;
  public isGreenColorSelected: boolean = false;
}
