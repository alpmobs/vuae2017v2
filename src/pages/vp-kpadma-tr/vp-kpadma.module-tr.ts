import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers/thespeakers-tr';
import { VPhnPageTR } from '../vp-hendra-nilam/vp-hendra-nilam-tr';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-kpadma-tr.html'
})
export class VPkpPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPhnPageTR = VPhnPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
