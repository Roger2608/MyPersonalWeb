import {Component} from '@angular/core';

@Component({
  selector: 'my_web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public title: string = 'Acerca de mi';
  public description: string = 'Desarrollador Web';

}
