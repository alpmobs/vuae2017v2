import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPage } from '../thespeakers/thespeakers';
import { allAboutPage } from '../allabout/allabout';

@IonicPage()
@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding-fr.html'
})
export class NewslandingPageFR {
allAboutPage = allAboutPage;
TheSpeakersPage = TheSpeakersPage;
  constructor() {}
}
