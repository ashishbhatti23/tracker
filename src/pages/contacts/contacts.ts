/// <reference path="tsd.d.ts" />
import { MenuController } from 'ionic-angular';
import {Component} from '@angular/core';

@Component({
  templateUrl: 'contacts.html',
})

export class ContactPage {
  private allContacts;
  constructor(public menu: MenuController) {
       this.findContacts();
   }

   findContacts=()=> {
   this.allContacts=[];
      var options = new ContactFindOptions();
      options.filter = "";
      options.multiple = true;
      var fields = ["displayName"];
      navigator.contacts.find(fields, this.contactfindSuccess, this.contactfindError, options);

   }
   contactfindSuccess=(contacts)=> {
      this.allContacts = contacts;

  }
  contactfindError=(message)=> {
    alert('Failed because: ' + message);
 }
}
