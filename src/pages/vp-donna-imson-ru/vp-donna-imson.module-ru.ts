import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers/thespeakers-ru';
import { VPrsPageRU } from '../vp-ranjit-singh/vp-ranjit-singh-ru';


@Component({
  selector: 'page-vp',
  templateUrl: 'vp-donna-imson-ru.html'
})
export class VPdiPageRU {
  TheSpeakersPageRU = TheSpeakersPageRU;
  VPrsPageRU = VPrsPageRU;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {

  }

}
