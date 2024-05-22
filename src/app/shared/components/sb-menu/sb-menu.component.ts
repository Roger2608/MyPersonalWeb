import {Component} from '@angular/core';
import {MenuItem} from "../../interfaces/menu-item";
import {Paths} from "../../../utils/constants/paths";

@Component({
  selector: 'shared-sb-menu',
  templateUrl: './sb-menu.component.html',
  styleUrls: ['./sb-menu.component.css']
})
export class SbMenuComponent {

  menuItems: MenuItem[] = [
    {title: 'About me', route: Paths.PATH_ABOUT_ME},
    {title: 'Proyectos realizados', route: Paths.PATH_PROJECT},
    {title: '¿Eres estudiante?', route: Paths.PATH_STUDENT},
    {title: '¿Eres Empresa?', route: Paths.PATH_BUSINESS},
    {title: 'Contactame', route: Paths.PATH_CONTACT},
    // {title: 'Invitame un Cafe :)', route: Paths.PATH_COFFEE},
  ];

}
