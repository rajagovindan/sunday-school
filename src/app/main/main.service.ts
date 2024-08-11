import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor( public http : HttpClient) { }
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
