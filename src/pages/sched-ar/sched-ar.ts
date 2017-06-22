import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, NavParams } from 'ionic-angular';
import { Dubai101Page } from '../dubai101/dubai101';
import { TheSpeakersPage } from '../thespeakers/thespeakers';

@Component({
  selector: 'page-sched',
  templateUrl: 'sched-ar.html'
})
export class SchedPageAR {
  Dubai101Page = Dubai101Page;
  TheSpeakersPage = TheSpeakersPage;
  constructor(public navCtrl: NavController) {

  }

}