import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers/thespeakersru';
import { VPssPageRU } from '../vp-sathi-senathirajah/vp-sathi-senathirajahru';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-adly-hassan-ru.html'
})
export class VPahPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPssPageRU = VPssPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
