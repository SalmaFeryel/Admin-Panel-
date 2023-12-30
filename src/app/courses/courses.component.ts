import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { faTrash,faListDots,faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(public Service :CoursesService){}

  faTrash=faTrash;
  faListDots=faListDots;
  faPen=faPen;
  cours!:any[]
  selectedCourse: any
  ngOnInit(): void {
   this.Service.getCourses().subscribe(result=>this.cours=result)
  }
  openDialog(course: any){
    this.selectedCourse = course
  }

  deleteCourse(course: any){
    this.Service.deleteCourse(course.id).subscribe(res => {
      this.cours=res
      this.ngOnInit()
    })
  }
  

}
