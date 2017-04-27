import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { GroupPage } from '../pages/groups/group';
import { TrackPage } from '../pages/track/track';
import { SettingsPage } from '../pages/settings/settings';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthService } from '../providers/auth-service';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contacts/contacts';
import { TabsPage } from '../pages/tabs/tabs';
import { ArraySortPipe } from '../pipes/alphabeticalPipe';
import { StatusBar } from '@ionic-native/status-bar';
import {enableProdMode} from '@angular/core';

enableProdMode();
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ContactPage,
    TrackPage,
    GroupPage,
    SettingsPage,
    TabsPage,
    ArraySortPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    RegisterPage,
    ContactPage,
    GroupPage,
    TrackPage,
    SettingsPage,
    TabsPage,
  ],
  providers: [
    AuthService,
    StatusBar,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
