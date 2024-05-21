import {Component} from '@angular/core';
import {Project} from "../../interfaces/project";


@Component({
  selector: 'my_web-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent {
  public title = 'Proyectos realizados';
  public description = 'en esta pagina se visualizan los proyectos realizados por el desarrollador';

  projects: Project[] = [
    {
      title: 'Proyecto 1',
      shortDescription: 'Descripción corta 1',
      description: 'Descripción 1',
      image: 'ruta/a/imagen/proyecto1.png',
      repository: 'https://github.com/usuario/proyecto1',
      url: 'https://proyecto1.com'
    },
    {
      title: 'Proyecto 2',
      shortDescription: 'Descripción corta 2',
      description: 'Descripción 2',
      image: 'ruta/a/imagen/proyecto2.png',
      repository: 'https://github.com/usuario/proyecto2',
      url: 'https://proyecto2.com'
    }, {
      title: 'Proyecto 3',
      shortDescription: 'Descripción corta 1',
      description: 'Descripción 1',
      image: 'ruta/a/imagen/proyecto1.png',
      repository: 'https://github.com/usuario/proyecto1',
      url: 'https://proyecto1.com'
    },
    {
      title: 'Proyecto 4',
      shortDescription: 'Descripción corta 2',
      description: 'Descripción 2',
      image: 'ruta/a/imagen/proyecto2.png',
      repository: 'https://github.com/usuario/proyecto2',
      url: 'https://proyecto2.com'
    }, {
      title: 'Proyecto 5',
      shortDescription: 'Descripción corta 1',
      description: 'Descripción 1',
      image: 'ruta/a/imagen/proyecto1.png',
      repository: 'https://github.com/usuario/proyecto1',
      url: 'https://proyecto1.com'
    },
    {
      title: 'Proyecto 6',
      shortDescription: 'Descripción corta 2',
      description: 'Descripción 2',
      image: 'ruta/a/imagen/proyecto2.png',
      repository: 'https://github.com/usuario/proyecto2',
      url: 'https://proyecto2.com'
    },
  ];

  selectedProject: Project | null = null;

  openModal(project: Project) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }
}
