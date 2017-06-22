import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { DownloadsPage } from '../downloads/downloads';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-faqs',
  templateUrl: 'faqs-ar.html'
})
export class FaqsPageAR {
  DownloadsPage = DownloadsPage;
  ContactPage = ContactPage;
  constructor(public navCtrl: NavController) { }

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

}