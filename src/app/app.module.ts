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
import { AlertCardComponent } from './alerts/alert-card/alert-card.component';
import { AlertListComponent } from './alerts/alert-list/alert-list.component';
import { AlertState } from './alerts/alert-list/store/alert.state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroCardComponent } from './heroes/hero-card/hero-card.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { HeroState } from './heroes/hero-list/store/hero.state';
import { NavbarComponent } from './navbar/navbar.component';
import { NewAlertDialogComponent } from './new-alert-dialog/new-alert-dialog.component';

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
