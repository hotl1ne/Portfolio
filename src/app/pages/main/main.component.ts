import { Component } from '@angular/core';
import { HeadearComponent } from "../../components/headear/headear.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { Project } from '../../models/projects.module';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeadearComponent, FooterComponent, ProjectCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  projectsList: Project[] = [
    {
      name: 'NFT-Market',
      demoUrl: 'https://nft-market-one-psi.vercel.app/',
      codeUrl: 'https://github.com/hotl1ne/NFT-Market',
      description: 'Place for selling or buying NFT`s',
      work: 'Coded, no mobile',
      photoUrl: 'photo_2025-02-01_21-26-11.jpg'
    },
    {
      name: 'Sneaker City',
      demoUrl: 'https://sneakers-city.vercel.app/',
      codeUrl: 'https://github.com/hotl1ne/SneakersCity',
      description: 'Marketplace for shoes',
      work: 'Coded, no mobile',
      photoUrl: 'photo_2025-02-04_22-52-35.jpg'
    }
  ]

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'CV_Mykhailo_Kurystia (2).pdf'; 
    link.download = 'CV_Kurytsia_Mykhailo.pdf'; 
    link.click();
  }

}
