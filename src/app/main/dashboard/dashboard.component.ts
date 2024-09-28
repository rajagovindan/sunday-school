import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  studentCount: number = 1500;
  teacherCount: number = 75;
  studentProfile = false;
  teacherProfile = false;

  handleSearch(criteria: any) {
    console.log('Received search criteria:', criteria);
    if(criteria)
    this.studentProfile = true;
  }


  teacherHandleSearch(criteria: any) {
    console.log('Received search criteria:', criteria);
    if(criteria){
    this.teacherProfile = true;
    }
  }
}
