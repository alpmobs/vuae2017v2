import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageFR } from '../thespeakers/thespeakers-fr';
import { VFPPageFR } from '../vfp-joseph-bismark/vfp-joseph-bismark-fr';

@Component({
  selector: 'page-vp',
  templateUrl: 'vmp-dato-sri-vijay-eswaran-fr.html'
})
export class VMPPageFR {
  TheSpeakersPageFR = TheSpeakersPageFR;
  VFPPageFR = VFPPageFR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor(public navCtrl: NavController) {

  }

}
