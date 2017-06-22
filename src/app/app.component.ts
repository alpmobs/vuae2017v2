import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { allAboutPage } from '../pages/allabout/allabout';
import { NewslandingPage } from '../pages/newslanding/newslanding';
import { TheSpeakersPage } from '../pages/thespeakers/thespeakers';
import { SchedPage } from '../pages/sched/sched';
import { Dubai101Page } from '../pages/dubai101/dubai101';
import { MerchandisePage } from '../pages/merchandise/merchandise';
import { MarkPage } from '../pages/mark/mark';
import { DownloadsPage } from '../pages/downloads/downloads';
import { FaqsPage } from '../pages/faqs/faqs';
import { ContactPage } from '../pages/contact/contact';
import { SplashPage } from '../pages/splash/splash';
import { ChangeLangPage } from '../pages/changelang/changelang';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SchedPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'All About V-UAE 2017', component: allAboutPage },
      { title: 'News and Updates', component: NewslandingPage },
      { title: 'The Speakers', component: TheSpeakersPage },
      { title: 'Daily Program Schedule', component: SchedPage },
      { title: 'Dubai 101', component: Dubai101Page },
      { title: 'Merchandise', component: MerchandisePage },
      { title: 'Make Your V-Con Mark', component: MarkPage },
      { title: '#VUAE17 Wallpapers', component: DownloadsPage },
      { title: 'FAQs', component: FaqsPage },
      { title: 'Contact Us', component: ContactPage },
      { title: 'Change Language', component: ChangeLangPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


}
