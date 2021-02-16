import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularNotificationModule, AngularNotificationService  } from 'angular-notification';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularNotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
