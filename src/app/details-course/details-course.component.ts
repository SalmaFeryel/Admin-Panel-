import { Component, Input } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.component.html',
  styleUrls: ['./details-course.component.css']
})
export class DetailsCourseComponent {
  @Input() course: any

  constructor(public service: CoursesService ){}
  

}

