import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageTR } from '../thespeakers/thespeakers-tr';
import { VPtgPageTR } from '../vp-tg-kintanar/vp-tg-kintanar-tr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vfp-joseph-bismark-tr.html'
})
export class VFPPageTR {
  TheSpeakersPageTR = TheSpeakersPageTR;
  VPtgPageTR = VPtgPageTR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor(public navCtrl: NavController) {

  }

}
