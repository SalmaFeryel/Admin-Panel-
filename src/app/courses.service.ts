import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
 showAddDialog=false;
 showDetailDialog= false
 showUpdateDialog= false
  constructor(private _HttpClient :HttpClient) { }
 getCourses():Observable<any[]>{
  return this._HttpClient.get<any[]>('http://localhost:3000/Courses');
  }
  addCourse(courseData: any): Observable<any[]> {
    return this._HttpClient.post<any[]>("http://localhost:3000/Courses", courseData);
  }

  deleteCourse(id: number){
    return this._HttpClient.delete<any>(`http://localhost:3000/Courses/${id}`)
  }

  updateCourse(id: number, data: any){
     return this._HttpClient.put<any>(`http://localhost:3000/Courses/${id}`, data)
  }
}