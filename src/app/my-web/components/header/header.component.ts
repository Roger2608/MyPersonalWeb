import {Component, Input} from '@angular/core';

@Component({
  selector: 'my_web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  public title!: string;

  @Input()
  public description!: string;

}
