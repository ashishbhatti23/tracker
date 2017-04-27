import {Component,ViewChild} from '@angular/core';
import {Nav} from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'group.html'
})

export class GroupPage {
  constructor(public menu: MenuController) {
  }
}
