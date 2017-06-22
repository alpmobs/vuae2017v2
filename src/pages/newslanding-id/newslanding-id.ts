import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers-id/thespeakers-id';
import { allAboutPageID } from '../allabout-id/allabout-id';

@IonicPage()
@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding-id.html'
})
export class NewslandingPageID {
allAboutPageID = allAboutPageID;
TheSpeakersPageID = TheSpeakersPageID;
  constructor() {}
}
