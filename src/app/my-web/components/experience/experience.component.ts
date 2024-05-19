import {Component} from '@angular/core';
import {Experience} from "../../interfaces/experience";

@Component({
  selector: 'my_web-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {title: 'Experiencia 1', summary: 'Resumen 1', description: 'Descripción 1'},
    {title: 'Experiencia 2', summary: 'Resumen 2', description: 'Descripción 2'},
    // Agrega más experiencias aquí
  ];

  selectedExperience: Experience | null = null;

  openPopup(experience: Experience): void {
    this.selectedExperience = experience;
  }

  closePopup(): void {
    this.selectedExperience = null;
  }
}
