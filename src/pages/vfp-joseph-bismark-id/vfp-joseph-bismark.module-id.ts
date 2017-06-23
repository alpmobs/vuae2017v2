import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers/thespeakers-id';
import { VPtgPageID } from '../vp-tg-kintanar/vp-tg-kintanar-id';

@Component({
  selector: 'page-vp',
  templateUrl: 'vfp-joseph-bismark.html'
})
export class VFPPage {
  TheSpeakersPage = TheSpeakersPage;
  VPtgPage = VPtgPage;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor(public navCtrl: NavController) {

  }

}
