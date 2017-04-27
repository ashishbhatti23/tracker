import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';

@Component({
templateUrl: 'app.html'
})
export class MyApp {
  rootPage = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform,private statusBar: StatusBar) {
    platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
    this.pages = [
   { title: 'Homepage', component: TabsPage },
    { title: 'Settings', component: SettingsPage },
  ];
  }
}
