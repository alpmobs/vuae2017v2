import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { allAboutPage } from '../allabout/allabout';
import { MarkPage } from '../mark/mark';
import { Dubai101Page } from '../dubai101/dubai101';
import { DownloadsPage } from '../downloads/downloads';

@Component({
  selector: 'page-home',
  templateUrl: 'home-id.html',
})
export class HomePageID {

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  allAboutPage = allAboutPage;
  MarkPage = MarkPage;
  Dubai101Page = Dubai101Page;
  DownloadsPage = DownloadsPage;
  constructor() { }
}
