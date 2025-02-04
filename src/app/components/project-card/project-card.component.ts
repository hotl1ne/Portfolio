import { Component, Input, input } from '@angular/core';
import { Project } from '../../models/projects.module';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  
  @Input() project: Project | undefined;

}
