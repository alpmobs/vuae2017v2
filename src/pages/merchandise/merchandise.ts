import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dubai101Page } from '../dubai101/dubai101';
import { MarkPage } from '../mark/mark';

@IonicPage()
@Component({
  selector: 'page-merchandise',
  templateUrl: 'merchandise.html'
})
export class MerchandisePage {
Dubai101Page = Dubai101Page;
MarkPage = MarkPage;
constructor() {}

ionViewDidLoad() {
  console.log('ionViewDidLoad MerchandisePage');
}

}
