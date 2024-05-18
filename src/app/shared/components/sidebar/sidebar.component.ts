import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Output() onToggle: any = new EventEmitter<boolean>();

  isSidebar = false;

  toggleSidebar() {
    this.isSidebar = !this.isSidebar;
    this.onToggle.emit(this.isSidebar);
  }
}
