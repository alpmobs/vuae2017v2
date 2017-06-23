import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers/thespeakers-ru';
import { VPdiPageRU } from '../vp-donna-imson/vp-donna-imson-ru';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-tg-kintanar-ru.html'
})
export class VPtgPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPdiPageRU = VPdiPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
