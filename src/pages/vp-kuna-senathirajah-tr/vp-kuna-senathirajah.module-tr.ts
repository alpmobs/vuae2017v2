import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers/thespeakers-tr';
import { VPpsPageTR } from '../vp-pathman-senathirajah/vp-pathman-senathirajah-tr';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-kuna-senathirajah-tr.html'
})
export class VPksPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPpsPageTR = VPpsPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
