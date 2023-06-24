import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResearchComponent } from './research/research.component';
import { ClubsComponent } from './clubs/clubs.component';

const routes: Routes = [
  {path: 'coursework', component: CoursesComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'clubs', component: ClubsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
