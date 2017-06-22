import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { allAboutPage } from '../allabout/allabout';
import { MarkPage } from '../mark/mark';
import { Dubai101Page } from '../dubai101/dubai101';
import { DownloadsPage } from '../downloads/downloads';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  allAboutPage = allAboutPage;
  MarkPage = MarkPage;
  NewsPage = NewsPage;
  Dubai101Page = Dubai101Page;
  DownloadsPage = DownloadsPage;
  constructor() { }
}
