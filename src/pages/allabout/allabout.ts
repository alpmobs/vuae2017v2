import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-allabout',
  templateUrl: 'allabout.html'
})
export class allAboutPage {

constructor(public navCtrl: NavController, public navParams: NavParams) {
}

ionViewDidLoad() {
  console.log('ionViewDidLoad AboutPage');
}

}
