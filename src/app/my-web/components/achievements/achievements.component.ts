import {Component} from '@angular/core';

@Component({
  selector: 'my_web-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
  achievements = [
    {title: 'Logro 1', description: 'Descripción 1', image: 'ruta/a/imagen/logro1.png'},
    {title: 'Logro 2', description: 'Descripción 2', image: 'ruta/a/imagen/logro2.png'},
    // Agrega más logros aquí
  ];
}
