import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers-tr/thespeakers-tr';
import { allAboutPageTR } from '../allabout-tr/allabout-tr';

@IonicPage()
@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding-tr.html'
})
export class NewslandingPageTR {
allAboutPageTR = allAboutPageTR;
TheSpeakersPageTR = TheSpeakersPageTR;
  constructor() {}
}
