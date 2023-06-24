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
    const heroes = of(COURSES);
    return heroes;
  }

  getHero(dept: string, num: number): Observable<Course> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const course = COURSES.find(h => h.dept === dept)!;
    return of(course);
  }
}
