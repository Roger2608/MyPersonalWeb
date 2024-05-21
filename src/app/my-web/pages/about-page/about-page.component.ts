import {Component} from '@angular/core';

@Component({
  selector: 'my_web-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
  public title = 'Acerca de mi';
  public description = 'This is the about page';

}
