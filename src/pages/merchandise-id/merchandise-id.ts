import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101Page } from '../dubai101/dubai101';
import { MarkPage } from '../mark/mark';

@IonicPage()
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise-id.html'
})
export class MerchandisePageID {
Dubai101Page = Dubai101Page;
MarkPage = MarkPage;
constructor() {}

ionViewDidLoad() {
  console.log('ionViewDidLoad MerchandisePage');
}

@ViewChild(Content) content: Content;

scrollToTop() {
  this.content.scrollToTop();
}

}
