import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mark',
  templateUrl: 'mark.html'
})
export class MarkPage {

constructor(public navCtrl: NavController, public navParams: NavParams) {
}

ionViewDidLoad() {
  console.log('ionViewDidLoad MarkPage');
}

}
