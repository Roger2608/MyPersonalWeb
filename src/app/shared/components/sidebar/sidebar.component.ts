import {Component} from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSidebar = false;

  toggleSidebar() {
    this.isSidebar = !this.isSidebar;
  }
}
