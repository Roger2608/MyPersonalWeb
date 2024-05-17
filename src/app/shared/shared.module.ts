import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SocialNetworksComponent} from './components/social-networks/social-networks.component';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {SbMenuComponent} from './components/sb-menu/sb-menu.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    SidebarComponent,
    SocialNetworksComponent,
    SbMenuComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {
}
