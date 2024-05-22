import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() onToggle: any = new EventEmitter<boolean>();

  isSidebar = false;

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem("isSidebar") !== null) {
      this.isSidebar = JSON.parse(localStorage.getItem("isSidebar") || 'false');
      this.route.navigateByUrl(this.isSidebar ? 'my-web' : '').then(() => {
        this.onToggle.emit(this.isSidebar);
      });
    }
  }

  toggleSidebar() {
    this.isSidebar = !this.isSidebar;
    this.onToggle.emit(this.isSidebar);
    this.route.navigateByUrl(this.isSidebar ? 'my-web' : '')
      .then(() => localStorage.setItem("isSidebar", JSON.stringify(this.isSidebar)));
  }
}
