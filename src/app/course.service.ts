import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSES } from './course-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Observable<Course[]> {
    const courses = of(COURSES);
    return courses;
  }

  getCourse(dept: string, num: number): Observable<Course> {
    const course = COURSES.find(h => h.dept === dept)!;
    return of(course);
  }
}
