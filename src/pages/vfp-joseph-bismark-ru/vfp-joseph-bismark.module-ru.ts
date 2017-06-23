import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers/thespeakers-ru';
import { VPtgPageRU } from '../vp-tg-kintanar/vp-tg-kintanar-ru';

@Component({
  selector: 'page-vp',
  templateUrl: 'vfp-joseph-bismark-ru.html'
})
export class VFPPageRU {
  TheSpeakersPage = TheSpeakersPageRU;
  VPtgPageRU = VPtgPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor(public navCtrl: NavController) {

  }

}
