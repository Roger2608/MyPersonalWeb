import {Component} from '@angular/core';

@Component({
  selector: 'my_web-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  pathImage: string = 'assets/technologies/';

  technologies = [
    {name: 'java', image: `${this.pathImage}java.svg`},
    {name: 'spring', image: `${this.pathImage}spring.svg`},
    {name: 'ts', image: `${this.pathImage}ts.svg`},
    {name: 'js', image: `${this.pathImage}js.svg`},
    {name: 'angular', image: `${this.pathImage}angular.svg`},
    {name: 'python', image: `${this.pathImage}python.svg`},
    {name: 'git', image: `${this.pathImage}git.svg`},
    {name: 'jenkins', image: `${this.pathImage}jenkins.svg`},
    {name: 'azure', image: `${this.pathImage}azure.svg`},
    {name: 'docker', image: `${this.pathImage}docker.svg`},
    {name: 'kubernetes', image: `${this.pathImage}kubernetes.svg`},
    {name: 'dynatrace', image: `${this.pathImage}dynatrace.svg`},
    {name: 'grafana', image: `${this.pathImage}grafana.svg`},
    {name: 'jira', image: `${this.pathImage}jira.svg`},
    // Agrega más tecnologías aquí
  ];
}
