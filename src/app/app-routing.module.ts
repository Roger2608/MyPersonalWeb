import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'my-web',
    loadChildren: () => import('./my-web/my-web.module').then(m => m.MyWebModule)
  },
  {
    path: '**',
    redirectTo: '/index.html',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {
}
