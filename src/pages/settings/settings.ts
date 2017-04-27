import {Component,ViewChild} from '@angular/core';
import { App, MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'settings.html'
})

export class SettingsPage {
  constructor(public menu: MenuController) {
  }
}
