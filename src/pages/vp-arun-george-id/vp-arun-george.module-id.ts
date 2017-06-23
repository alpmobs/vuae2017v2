import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers/thespeakers-id';
import { VPahPageID } from '../vp-adly-hassan/vp-adly-hassan-id';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-arun-george-id.html'
})
export class VPagPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VPahPageID = VPahPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
