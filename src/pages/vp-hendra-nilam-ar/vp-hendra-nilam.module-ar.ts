import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers/thespeakers-ar';
import { VPdjPageAR } from '../vp-dev-johl/vp-dev-johl-ar';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-hendra-nilam-ar.html'
})
export class VPhnPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VPdjPageAR = VPdjPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
