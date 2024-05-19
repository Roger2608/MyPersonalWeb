import {Component} from '@angular/core';

@Component({
  selector: 'my_web-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  technologies = [
    {name: 'TypeScript', image: 'ruta/a/imagen/typescript.png'},
    {name: 'JavaScript', image: 'ruta/a/imagen/javascript.png'},
    {name: 'NPM', image: 'ruta/a/imagen/npm.png'},
    {name: 'Angular', image: 'ruta/a/imagen/angular.png'}
    // Agrega más tecnologías aquí
  ];
}
