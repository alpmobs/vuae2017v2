import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers/thespeakers-id';
import { VPdiPageID } from '../vp-donna-imson/vp-donna-imson-id';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-tg-kintanar-id.html'
})
export class VPtgPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VPdiPageID = VPdiPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
