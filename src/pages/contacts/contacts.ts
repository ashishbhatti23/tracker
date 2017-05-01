/// <reference path="../../../typings/index.d.ts" />
import { MenuController } from 'ionic-angular';
import {Component} from '@angular/core';

@Component({
templateUrl:'contacts.html'
})
export class ContactPage {
private allContacts;
 currentPageClass = this;
 alphaScrollItemTemplate: string = `
   <button ion-button full color="light" (click)="currentPageClass.onItemClick(item)">
     {{item.displayName}}
   </button>
 `;
 triggerAlphaScrollChange: number = 0;

 constructor() {
   this.findContacts();
 }

 onItemClick(item) {
   // This is an example of how you could manually trigger ngOnChange
   // for the component. If you modify "listData" it won't perform
   // an ngOnChange, you will have to trigger manually to refresh the component.
   this.triggerAlphaScrollChange++;
   window.plugins.CallNumber.callNumber(function(){}, function(){}, item.phoneNumbers[0].value, true);
 }

 findContacts() {
 this.allContacts=[];
 var options = new ContactFindOptions();
 options.filter = "";
 options.multiple = true;
 var fields = ["displayName"];
 navigator.contacts.find(fields, this.contactfindSuccess, this.contactfindError, options);
}
 contactfindSuccess=(contacts)=> {
    this.allContacts = contacts.sort(this.compare);

}
contactfindError=(message)=> {
  alert('Failed because: ' + message);
}
compare = (a,b) => {
  if (this.capitalizeFirstLetter(a.displayName) < this.capitalizeFirstLetter(b.displayName))
    return -1;
  if (this.capitalizeFirstLetter(a.displayName) > this.capitalizeFirstLetter(b.displayName))
    return 1;
  return 0;
}
capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

}
