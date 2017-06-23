import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageAR } from '../thespeakers/thespeakers-ar';
import { VFPPageAR } from '../vfp-joseph-bismark/vfp-joseph-bismark-ar';

@Component({
  selector: 'page-vp',
  templateUrl: 'vmp-dato-sri-vijay-eswaran-ar.html'
})
export class VMPPage {
  TheSpeakersPageAR = TheSpeakersPageAR;
  VFPPageAR = VFPPageAR;

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  constructor(public navCtrl: NavController) {

  }

}
