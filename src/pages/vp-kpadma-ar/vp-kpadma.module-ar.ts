import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers/thespeakers-ar';
import { VPhnPageAR } from '../vp-hendra-nilam/vp-hendra-nilam-ar';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-kpadma-ar.html'
})
export class VPkpPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VPhnPageAR = VPhnPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
