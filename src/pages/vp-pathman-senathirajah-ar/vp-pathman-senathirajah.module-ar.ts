import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers/thespeakers-ar';
import { VPagPageAR } from '../vp-arun-george/vp-arun-george-ar';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-pathman-senathirajah-ar.html'
})
export class VPpsPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VPagPageAR = VPagPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
