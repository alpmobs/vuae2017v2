import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers/thespeakers-ru';
import { VPdjPageRU } from '../vp-dev-johl/vp-dev-johl-ru';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-hendra-nilam-ru.html'
})
export class VPhnPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPdjPageRU = VPdjPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
