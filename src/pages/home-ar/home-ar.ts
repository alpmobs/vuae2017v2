import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { allAboutPageAR } from '../allabout-ar/allabout-ar';
import { MarkPageAR } from '../mark-ar/mark-ar';
import { Dubai101PageAR } from '../dubai101-ar/dubai101-ar';
import { DownloadsPageAR } from '../downloads-ar/downloads-ar';

@Component({
  selector: 'page-home',
  templateUrl: 'home-ar.html',
})
export class HomePageAR {

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  allAboutPageAR = allAboutPageAR;
  MarkPageAR = MarkPageAR;
  Dubai101PageAR = Dubai101PageAR;
  DownloadsPageAR = DownloadsPageAR;
  constructor() { }
}
