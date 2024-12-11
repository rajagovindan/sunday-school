import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  studentCount: number = 0;
  teacherCount: number = 0;
  studentProfile = false;
  teacherProfile = false;
  constructor( public _service: MainService) { }
  ngOnInit() {
    this._service.dashboardCount().subscribe((res: any) => {
      this.studentCount = res
      this.teacherCount = res
    });
  }

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
