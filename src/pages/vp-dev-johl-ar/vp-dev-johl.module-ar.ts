import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers/thespeakers-ar';
import { VPdwPageAR } from '../vp-dev-wadhwani/vp-dev-wadhwani-ar';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-dev-johl-ar.html'
})
export class VPdjPageAR {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VPdwPageAR = VPdwPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
