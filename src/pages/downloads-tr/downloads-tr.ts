import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarkPage } from '../mark/mark';
import { FaqsPage } from '../faqs/faqs';


@Component({
  selector: 'page-download',
  templateUrl: 'downloads-tr.html'
})
export class DownloadsPageTR {
  FaqsPage = FaqsPage;
  MarkPage = MarkPage;

  constructor(public navCtrl: NavController) {

  }

}
