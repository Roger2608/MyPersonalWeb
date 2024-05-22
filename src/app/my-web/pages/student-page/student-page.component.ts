import {Component} from '@angular/core';
import {ComputerFills} from "../../interfaces/computer-fills";

@Component({
  selector: 'my_web-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent {

  title: string = 'Student Page';
  description: string = 'This is the student page.';
  url: string = 'https://facebook.com';

  public pills: ComputerFills[] = [
    {
      title: 'Proyecto 1',
      shortDescription: 'Descripción corta 1',
      description: 'Descripción 1',
      image: 'ruta/a/imagen/proyecto1.png',
      url: 'https://proyecto1.com'
    },
    {
      title: 'Proyecto 2',
      shortDescription: 'Descripción corta 2',
      description: 'Descripción 2',
      image: 'ruta/a/imagen/proyecto2.png',
      url: 'https://proyecto2.com'
    }, {
      title: 'Proyecto 3',
      shortDescription: 'Descripción corta 1',
      description: 'Descripción 1',
      image: 'ruta/a/imagen/proyecto1.png',
      url: 'https://proyecto1.com'
    },
    {
      title: 'Proyecto 4',
      shortDescription: 'Descripción corta 2',
      description: 'Descripción 2',
      image: 'ruta/a/imagen/proyecto2.png',
      url: 'https://proyecto2.com'
    }, {
      title: 'Proyecto 5',
      shortDescription: 'Descripción corta 1',
      description: 'Descripción 1',
      image: 'ruta/a/imagen/proyecto1.png',
      url: 'https://proyecto1.com'
    },
    {
      title: 'Proyecto 6',
      shortDescription: 'Descripción corta 2',
      description: 'Descripción 2',
      image: 'ruta/a/imagen/proyecto2.png',
      url: 'https://proyecto2.com'
    },
  ]
}
