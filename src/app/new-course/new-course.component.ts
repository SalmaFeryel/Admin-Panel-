import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent {
constructor( private fb:FormBuilder,public service: CoursesService){}
addForm = this.fb.group(
  {
    name :['',Validators.required],
    price :['',Validators.required],
    image :['',Validators.required]
  }
)
addNew(){
  if(this.addForm.valid){
    const courseData = this.addForm.value
    this.service.addCourse(courseData).subscribe(res => window.location.reload())
  }
  else
  alert('All fields are required !')
}
}
