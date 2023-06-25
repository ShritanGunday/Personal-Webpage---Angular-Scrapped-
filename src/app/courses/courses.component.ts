import { Component, OnInit } from '@angular/core';
import { COURSES } from '../course-list';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = COURSES;
  selectedCourse?: Course;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;
  }

  getInfo(course: Course) {
    let info = '';
    
  }
}
