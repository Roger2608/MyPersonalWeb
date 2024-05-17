import {Component} from '@angular/core';
import {MenuItem} from "../../interfaces/menu-item";

@Component({
  selector: 'shared-sb-menu',
  templateUrl: './sb-menu.component.html',
  styleUrls: ['./sb-menu.component.css']
})
export class SbMenuComponent {

  menuItems: MenuItem[] = [
    {title: 'About me', route: '/about-me'},
    {title: 'Proyectos realizados', route: '/proyectos-realizados'},
    {title: '¿Eres estudiante?', route: '/eres-estudiante'},
    {title: '¿Eres Empresa?', route: '/eres-empresa'},
    {title: 'Contactame', route: '/contactame'},
    {title: 'Invitame un Cafe :)', route: '/invitame-un-cafe'},
  ];

}
