import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { allAboutPage } from '../allabout/allabout';
import { MarkPage } from '../mark/mark';
import { Dubai101Page } from '../dubai101/dubai101';
import { DownloadsPage } from '../downloads/downloads';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
allAboutPage = allAboutPage;
MarkPage = MarkPage;
Dubai101Page = Dubai101Page;
DownloadsPage = DownloadsPage;
  constructor() {}
}
