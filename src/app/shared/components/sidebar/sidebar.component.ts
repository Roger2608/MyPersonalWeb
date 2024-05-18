import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Output() onToggle: any = new EventEmitter<boolean>();

  isSidebar = false;

  constructor(private route: Router) {
  }

  toggleSidebar() {
    this.isSidebar = !this.isSidebar;
    this.onToggle.emit(this.isSidebar);
    return this.route.navigateByUrl(this.isSidebar ? 'my-web' : '');
  }
}
