import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyWebRoutingModule} from "./my-web-routing.module";
import {SharedModule} from "../shared/shared.module";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { BusinessPageComponent } from './pages/business-page/business-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CoffePageComponent } from './pages/coffe-page/coffe-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AboutMeComponent,
    AboutPageComponent,
    StudentPageComponent,
    BusinessPageComponent,
    ContactPageComponent,
    CoffePageComponent
  ],
  imports: [
    CommonModule,
    MyWebRoutingModule,
    SharedModule
  ]
})
export class MyWebModule {
}
