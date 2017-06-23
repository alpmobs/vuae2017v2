import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageID } from '../thespeakers/thespeakers-id';
import { VPftPageID } from '../vp-ferdie-tolentino/vp-ferdie-tolentino-id';

@Component({
  selector: 'page-vp',
  templateUrl: 'vp-sathi-senathirajah-id.html'
})

export class VPssPageID {
  TheSpeakersPageID = TheSpeakersPageID;
  VPftPageID = VPftPageID;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
