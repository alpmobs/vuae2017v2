import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers/thespeakers-fr';
import { VPksPageFR } from '../vp-kuna-senathirajah/vp-kuna-senathirajah-fr';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-ranjit-singh-fr.html'
})
export class VPrsPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VPksPageFR = VPksPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
