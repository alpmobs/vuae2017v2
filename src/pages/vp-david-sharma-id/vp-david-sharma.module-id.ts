import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers/thespeakers-id';
import { VPmkPage } from '../vp-mahendra-kumar/vp-mahendra-kumar-id';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-david-sharma-id.html'
})
export class VPdsPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VPmkPageID = VPmkPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
