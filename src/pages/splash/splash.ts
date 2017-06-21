import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { SplashnextPage } from '../splashnext/splashnext';

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html'
})
export class SplashPage {
SplashnextPage = SplashnextPage;
  constructor() {}

}
