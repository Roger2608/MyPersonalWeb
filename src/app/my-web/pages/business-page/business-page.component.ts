import {Component} from '@angular/core';

@Component({
  selector: 'my_web-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.css']
})
export class BusinessPageComponent {
  projectTypes = [
    {
      title: 'Backend',
      description: 'Desarrollo de servicios y APIs utilizando tecnologías como Node.js, .NET, Python, etc.'
    },
    {
      title: 'Frontend',
      description: 'Desarrollo de interfaces de usuario utilizando tecnologías como Angular, React, Vue.js, etc.'
    },
    {
      title: 'Aplicaciones de escritorio',
      description: 'Desarrollo de aplicaciones de escritorio utilizando tecnologías como Electron, .NET, Java, etc.'
    },
    {
      title: 'Aplicaciones web',
      description: 'Desarrollo de aplicaciones web utilizando tecnologías como HTML, CSS, JavaScript, etc.'
    },
    {title: 'WordPress', description: 'Desarrollo de sitios web y plugins para WordPress.'},
    {
      title: 'Cloud (Azure)',
      description: 'Desarrollo y despliegue de aplicaciones en la nube utilizando Microsoft Azure.'
    },
    {
      title: 'Automatizaciones de despliegues',
      description: 'Automatización de despliegues utilizando tecnologías como Jenkins, GitHub Actions, Azure DevOps, etc.'
    },
    // Agrega más tipos de proyectos aquí
  ];
}
