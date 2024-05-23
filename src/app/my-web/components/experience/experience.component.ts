import {Component} from '@angular/core';
import {Experience} from "../../interfaces/experience";

@Component({
  selector: 'my_web-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      nameBusiness: 'Banco de Credito del Perú',
      occupation: 'Backend Java Software Engineer',
      url: 'https://www.viabcp.com/',
      description: 'BCP: banco líder del Perú y socio de tus planes. En ViaBCP encuentra soluciones financieras personales, para pymes y empresas.',
      pathImage: 'assets/business/bcp.jpg'
    },
    {
      nameBusiness: 'Entelgy',
      occupation: 'Analista programador Java',
      url: 'https://www.entelgy.com/',
      description: 'Consultora española con posición en 8 paises, presta servicios a prestigiosas empresas, entre ellas las más importantes en sectores bancarios.',
      pathImage: 'assets/business/entelgy.png'
    },
    {
      nameBusiness: 'Avatar Global',
      occupation: 'Desarrollador II',
      url: 'https://www.avatar-global.com/',
      description: 'Avatar Global es una empresa especializada en comercio electrónico.',
      pathImage: 'assets/business/avatar.svg'
    },
  ];

  selectedExperience: Experience | null = null;

  openPopup(experience: Experience): void {
    this.selectedExperience = experience;
  }

  closePopup(): void {
    this.selectedExperience = null;
  }
}
