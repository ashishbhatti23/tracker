import {Component,ViewChild} from '@angular/core';
import { ContactPage } from '../contacts/contacts';
import { TrackPage } from '../track/track';
import { GroupPage } from '../groups/group';
import {  MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
tab1Root: any;
  tab2Root: any;
  tab3Root: any;


  constructor(public menu: MenuController) {
  this.tab1Root=ContactPage;
  this.tab2Root=TrackPage;
  this.tab3Root=GroupPage;
  }

}
