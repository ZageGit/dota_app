import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { NgxsModule } from '@ngxs/store';
import { HeroState } from './hero-list/store/hero.state';
import { HttpClientModule } from '@angular/common/http';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { AlertListComponent } from './alert-list/alert-list.component';
import { AlertCardComponent } from './alert-card/alert-card.component';
import { NewAlertDialogComponent } from './new-alert-dialog/new-alert-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AlertState } from './alert-list/store/alert.state';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroListComponent,
    HeroCardComponent,
    AlertListComponent,
    AlertCardComponent,
    NewAlertDialogComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
