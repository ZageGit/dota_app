import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { AlertListComponent } from './alert-list/alert-list.component';

const routes: Routes = [
  { path: 'hero-list', component: HeroListComponent },
  { path: 'alert-list', component: AlertListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
