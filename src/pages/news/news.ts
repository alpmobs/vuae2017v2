import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { NewslandingPage } from '../newslanding/newslanding';
import { TheSpeakersPage } from '../thespeakers/thespeakers';


@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  NewslandingPage = NewslandingPage;
  TheSpeakersPage = TheSpeakersPage;
  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
  constructor(public navCtrl: NavController) {}

}
