import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor( public http : HttpClient) { }
  dashboardCount(logincredentials:any)
  {
    const url = `api/dashboard/detail`;
    let httpOptions = {
      headers: new HttpHeaders({ authorization: 'Basic ' + btoa(logincredentials) })
  };
  return this.http.get<any>('/user/get', httpOptions)
    return this.http.get(url)
  }
  studentfilterSearch(payload : any)
  {
    const url = `api/search/student/filter`;
    return this.http.post(url,payload)
  }
  getstandard()
  {
    const url = `api/dashboard/standards`;
    return this.http.get(url)
  }
  getMedium()
  {
    const url = `api/dashboard/medium`;
    return this.http.get(url)
  }
  stafffilterSearch(filtervalue : any)
  {
    const url = `api/search/staff/filter`;
    return this.http.post(url,filtervalue)
  }
  addStudent(payload : any)
  {
    const url = `api/student/add`;
    return this.http.post(url, payload)
  }
  addAcademics(payload : any,studentid: any)
  {
    const url = `api/student/${studentid}/academic/add`;
    return this.http.post(url, payload)
  }
  getDetails()
  {
    const url = `api/dashboard/detail`;
    return this.http.get(url)
  }
  addTeachers(payload : any)
  {
    const url = `api/staff/add`;
    return this.http.post(url, payload)
  }
}
