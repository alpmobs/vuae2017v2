import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers/thespeakers-tr';
import { VPmqPageTR } from '../vp-dr-motaz-qais/vp-dr-motaz-qais-tr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-mahendra-kumar-tr.html'
})
export class VPmkPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPmqPageTR = VPmqPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
