import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers/thespeakers-ru';
import { VPkpPageRU } from '../vp-kpadma/vp-kpadma-ru';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dr-motaz-qais-ru.html'
})
export class VPmqPage {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPkpPageRU = VPkpPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
