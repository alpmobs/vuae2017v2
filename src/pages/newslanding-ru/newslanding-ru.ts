import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TheSpeakersPageRU } from '../thespeakers-ru/thespeakers-ru';
import { allAboutPageRU } from '../allabout-ru/allabout-ru';
import { NewsPageRU } from '../news-ru/news-ru';


@IonicPage()
@Component({
  selector: 'page-newslanding',
  templateUrl: 'newslanding-ru.html'
})
export class NewslandingPageRU {
allAboutPageRU = allAboutPageRU;
TheSpeakersPageRU = TheSpeakersPageRU;
NewsPageRU = NewsPageRU;
  constructor() {}
}
