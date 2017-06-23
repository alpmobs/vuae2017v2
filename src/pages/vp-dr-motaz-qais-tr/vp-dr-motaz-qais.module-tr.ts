import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers/thespeakers-tr';
import { VPkpPageTR } from '../vp-kpadma/vp-kpadma-tr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dr-motaz-qais-tr.html'
})
export class VPmqPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPkpPageTR = VPkpPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
