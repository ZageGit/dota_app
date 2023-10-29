import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertListComponent } from './features/alerts/alert-list/alert-list.component';
import { HeroListComponent } from './features/heroes/hero-list/hero-list.component';
import { PinnedHeroesComponent } from './features/heroes/pinned-heroes/pinned-heroes.component';

const routes: Routes = [
  { path: 'hero-list', component: HeroListComponent },
  { path: 'alert-list', component: AlertListComponent},
  { path: 'pinned-heroes', component: PinnedHeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
