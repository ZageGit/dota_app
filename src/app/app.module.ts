import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertCardComponent } from './features/alerts/alert-card/alert-card.component';
import { AlertListComponent } from './features/alerts/alert-list/alert-list.component';
import { AlertState } from './features/alerts/store/alert.state';
import { HeroCardComponent } from './features/heroes/hero-card/hero-card.component';
import { HeroListComponent } from './features/heroes/hero-list/hero-list.component';
import { HeroState } from './features/heroes/store/hero.state';
import { NavbarComponent } from './navbar/navbar.component';
import { NewAlertDialogComponent } from './features/alerts/new-alert-dialog/new-alert-dialog.component';
import { PinnedHeroesComponent } from './features/heroes/pinned-heroes/pinned-heroes.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroListComponent,
    HeroCardComponent,
    AlertListComponent,
    AlertCardComponent,
    NewAlertDialogComponent,
    PinnedHeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsModule.forRoot([HeroState, AlertState]),
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
