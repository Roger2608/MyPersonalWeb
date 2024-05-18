import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyWebRoutingModule} from "./my-web-routing.module";
import {SharedModule} from "../shared/shared.module";
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {StudentPageComponent} from './pages/student-page/student-page.component';
import {BusinessPageComponent} from './pages/business-page/business-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {CoffeePageComponent} from "./pages/coffee-page/coffee-page.component";


@NgModule({
  declarations: [
    AboutPageComponent,
    StudentPageComponent,
    BusinessPageComponent,
    ContactPageComponent,
    CoffeePageComponent
  ],
  imports: [
    CommonModule,
    MyWebRoutingModule,
    SharedModule
  ]
})
export class MyWebModule {
}
