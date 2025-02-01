import { Component } from '@angular/core';
import { HeadearComponent } from "../../components/headear/headear.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ProjectCardComponent } from "../../components/project-card/project-card.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeadearComponent, FooterComponent, ProjectCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'CV_Mykhailo_Kurystia (2).pdf'; 
    link.download = 'CV_Kurytsia_Mykhailo.pdf'; 
    link.click();
  }

}
