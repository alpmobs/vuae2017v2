import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers/thespeakers-ru';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dev-wadhwani-id.html'
})
export class VPdwPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
