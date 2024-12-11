import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor( public http : HttpClient) { }
  dashboardCount()
  {
    const url = `http://localhost:8080/api/dashboard/detail`;
    return this.http.get(url)
  }
  studentfilterSearch(payload : any)
  {
    const url = `http://localhost:8080/api/search/students`;
    return this.http.post(url,payload)
  }
  stafffilterSearch(filtervalue : any)
  {
    const url = `http://localhost:8080/api/search/staffs`;
    return this.http.post(url,filtervalue)
  }
  addStudent(payload : any)
  {
    const url = `http://localhost:8080/api/student/add`;
    return this.http.post(url, payload)
  }
  addAcademics(payload : any,studentid: any)
  {
    const url = `http://localhost:8080/api/student/${studentid}/academic/add`;
    return this.http.post(url, payload)
  }
  getDetails()
  {
    const url = `http://localhost:8080/api/dashboard/detail`;
    return this.http.get(url)
  }
  addTeachers(payload : any)
  {
    const url = `http://localhost:8080/api/staff/add`;
    return this.http.post(url, payload)
  }
}
