import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertListComponent } from './features/alerts/alert-list/alert-list.component';
import { HeroListComponent } from './features/heroes/hero-list/hero-list.component';

const routes: Routes = [
  { path: 'hero-list', component: HeroListComponent },
  { path: 'alert-list', component: AlertListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
