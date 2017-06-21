import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MerchandisePage } from '../merchandise/merchandise';
import { DownloadsPage } from '../downloads/downloads';

@IonicPage()
@Component({
  selector: 'page-mark',
  templateUrl: 'mark-id.html'
})
export class MarkPageID {
DownloadsPage = DownloadsPage;
MerchandisePage = MerchandisePage;
constructor() {
}

ionViewDidLoad() {
  console.log('ionViewDidLoad MarkPage');
}

}
