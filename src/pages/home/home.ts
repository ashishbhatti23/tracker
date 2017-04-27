import {Component,ViewChild} from '@angular/core';
import {Nav} from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SettingsPage } from '../settings/settings';
import { AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'home.html'
})

export class HomePage {
@ViewChild('content') nav: Nav;

  rootTabPage=TabsPage;
  pages: Array<{title: string, component: any}>;
  constructor(public menu: MenuController,private auth: AuthService,public alerCtrl: AlertController) {
  this.pages = [
       { title: 'Home Page', component: TabsPage },
       { title: 'Settings', component: SettingsPage },
       { title: 'LogOut',component: TabsPage }
     ];
  }

  openPage(page) {
  if(page.title==="LogOut"){
  let confirm = this.alerCtrl.create({
    title: 'LogOut?',
    message: 'Are you sure you want to logout?',
    buttons: [
      {
        text: 'Yes',
        handler: () => {
        this.auth.logout().subscribe(succ => {
        this.nav.setRoot(LoginPage)
 });
        }
      },
      {
        text: 'No',
        handler: () => {
          console.log('Agree clicked');
        }
      }
    ]
  });
  confirm.present()
  }
  else{
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
      }
    }
}
