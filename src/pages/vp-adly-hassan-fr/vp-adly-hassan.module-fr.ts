import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers/thespeakers-fr';
import { VPssPageFR } from '../vp-sathi-senathirajah/vp-sathi-senathirajah-fr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-adly-hassan-fr.html'
})
export class VPahPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VPssPageFR = VPssPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
