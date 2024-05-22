import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {StudentPageComponent} from "./pages/student-page/student-page.component";
import {BusinessPageComponent} from "./pages/business-page/business-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {CoffeePageComponent} from "./pages/coffee-page/coffee-page.component";
import {ProjectPageComponent} from "./pages/project-page/project-page.component";

const routes: Routes = [
  {
    path: 'about-me',
    component: AboutPageComponent
  },
  {
    path: 'student',
    component: StudentPageComponent
  },
  {
    path: 'business',
    component: BusinessPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'coffee',
    component: CoffeePageComponent
  },
  {
    path: 'projects',
    component: ProjectPageComponent
  },
  {
    path: 'business/my-web/contact',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'business/my-web/projects',
    redirectTo: 'projects',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'about-me',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class MyWebRoutingModule {
}
