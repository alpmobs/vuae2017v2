import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NewslandingPage } from '../newslanding/newslanding';

@IonicPage()
@Component({
  selector: 'page-allabout',
  templateUrl: 'allabout-fr.html'
})
export class allAboutPageFR {
HomePage = HomePage;
NewslandingPage = NewslandingPage;
  constructor() {}
  ionViewDidLoad() {
      console.log('ionViewDidLoad AboutPage');
  }
}
