import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HomePageAR } from '../pages/home-ar/home-ar';
import { HomePageFR } from '../pages/home-fr/home-fr';
import { HomePageTR } from '../pages/home-tr/home-tr';
import { HomePageRU } from '../pages/home-ru/home-ru';
import { HomePageID } from '../pages/home-id/home-id';

import { allAboutPage } from '../pages/allabout/allabout';
import { allAboutPageAR } from '../pages/allabout-ar/allabout-ar';
import { allAboutPageID } from '../pages/allabout-id/allabout-id';
import { allAboutPageFR } from '../pages/allabout-fr/allabout-fr';
import { allAboutPageTR } from '../pages/allabout-tr/allabout-tr';
import { allAboutPageRU } from '../pages/allabout-ru/allabout-ru';

import { NewslandingPage } from '../pages/newslanding/newslanding';
import { NewslandingPageAR } from '../pages/newslanding-ar/newslanding-ar';
import { NewslandingPageFR } from '../pages/newslanding-fr/newslanding-fr';
import { NewslandingPageID } from '../pages/newslanding-id/newslanding-id';
import { NewslandingPageRU } from '../pages/newslanding-ru/newslanding-ru';
import { NewslandingPageTR } from '../pages/newslanding-tr/newslanding-tr';

import { NewsPage } from '../pages/news/news';
import { NewsPageAR } from '../pages/news-ar/news-ar';
import { NewsPageFR } from '../pages/news-fr/news-fr';
import { NewsPageID } from '../pages/news-id/news-id';
import { NewsPageRU } from '../pages/news-ru/news-ru';
import { NewsPageTR } from '../pages/news-tr/news-tr';

import { TheSpeakersPage } from '../pages/thespeakers/thespeakers';
import { TheSpeakersPageAR } from '../pages/thespeakers-ar/thespeakers-ar';
import { TheSpeakersPageFR } from '../pages/thespeakers-fr/thespeakers-fr';
import { TheSpeakersPageID } from '../pages/thespeakers-id/thespeakers-id';
import { TheSpeakersPageRU } from '../pages/thespeakers-ru/thespeakers-ru';
import { TheSpeakersPageTR } from '../pages/thespeakers-tr/thespeakers-tr';

import { SchedPage } from '../pages/sched/sched';
import { SchedPageAR } from '../pages/sched-ar/sched-ar';
import { SchedPageID } from '../pages/sched-id/sched-id';
import { SchedPageFR } from '../pages/sched-fr/sched-fr';
import { SchedPageRU } from '../pages/sched-ru/sched-ru';
import { SchedPageTR } from '../pages/sched-tr/sched-tr';

import { Dubai101Page } from '../pages/dubai101/dubai101';
import { Dubai101PageAR } from '../pages/dubai101-ar/dubai101-ar';
import { Dubai101PageID } from '../pages/dubai101-id/dubai101-id';
import { Dubai101PageFR } from '../pages/dubai101-fr/dubai101-fr';
import { Dubai101PageRU } from '../pages/dubai101-ru/dubai101-ru';
import { Dubai101PageTR } from '../pages/dubai101-tr/dubai101-tr';

import { MerchandisePage } from '../pages/merchandise/merchandise';
import { MerchandisePageAR } from '../pages/merchandise-ar/merchandise-ar';
import { MerchandisePageID } from '../pages/merchandise-id/merchandise-id';
import { MerchandisePageFR } from '../pages/merchandise-fr/merchandise-fr';
import { MerchandisePageRU } from '../pages/merchandise-ru/merchandise-ru';
import { MerchandisePageTR } from '../pages/merchandise-tr/merchandise-tr';

import { MarkPage } from '../pages/mark/mark';
import { MarkPageAR } from '../pages/mark-ar/mark-ar';
import { MarkPageID } from '../pages/mark-id/mark-id';
import { MarkPageFR } from '../pages/mark-fr/mark-fr';
import { MarkPageRU } from '../pages/mark-ru/mark-ru';
import { MarkPageTR } from '../pages/mark-tr/mark-tr';

import { DownloadsPage } from '../pages/downloads/downloads';
import { DownloadsPageAR } from '../pages/downloads-ar/downloads-ar';
import { DownloadsPageID } from '../pages/downloads-id/downloads-id';
import { DownloadsPageFR } from '../pages/downloads-fr/downloads-fr';
import { DownloadsPageRU } from '../pages/downloads-ru/downloads-ru';
import { DownloadsPageTR } from '../pages/downloads-tr/downloads-tr';

import { FaqsPage } from '../pages/faqs/faqs';
import { FaqsPageAR } from '../pages/faqs-ar/faqs-ar';
import { FaqsPageFR } from '../pages/faqs-fr/faqs-fr';
import { FaqsPageID } from '../pages/faqs-id/faqs-id';
import { FaqsPageRU } from '../pages/faqs-ru/faqs-ru';
import { FaqsPageTR } from '../pages/faqs-tr/faqs-tr';

import { ContactPage } from '../pages/contact/contact';
import { ContactPageAR } from '../pages/contact-ar/contact-ar';
import { ContactPageID } from '../pages/contact-id/contact-id';
import { ContactPageFR } from '../pages/contact-fr/contact-fr';
import { ContactPageRU } from '../pages/contact-ru/contact-ru';
import { ContactPageTR } from '../pages/contact-tr/contact-tr';

import { VFPPage } from '../pages/vfp-joseph-bismark/vfp-joseph-bismark';
import { VMPPage } from '../pages/vmp-dato-sri-vijay-eswaran/vmp-dato-sri-vijay-eswaran';
import { VPahPage } from '../pages/vp-adly-hassan/vp-adly-hassan';
import { VPagPage } from '../pages/vp-arun-george/vp-arun-george';
import { VPcmPage } from '../pages/vp-cherian-mathew/vp-cherian-mathew';
import { VPdsPage } from '../pages/vp-david-sharma/vp-david-sharma';
import { VPdjPage } from '../pages/vp-dev-johl/vp-dev-johl';
import { VPdwPage } from '../pages/vp-dev-wadhwani/vp-dev-wadhwani';
import { VPdiPage } from '../pages/vp-donna-imson/vp-donna-imson';
import { VPmqPage } from '../pages/vp-dr-motaz-qais/vp-dr-motaz-qais';
import { VPftPage } from '../pages/vp-ferdie-tolentino/vp-ferdie-tolentino';
import { VPhnPage } from '../pages/vp-hendra-nilam/vp-hendra-nilam';
import { VPkpPage } from '../pages/vp-kpadma/vp-kpadma';
import { VPksPage } from '../pages/vp-kuna-senathirajah/vp-kuna-senathirajah';
import { VPmkPage } from '../pages/vp-mahendra-kumar/vp-mahendra-kumar';
import { VPpsPage } from '../pages/vp-pathman-senathirajah/vp-pathman-senathirajah';
import { VPrsPage } from '../pages/vp-ranjit-singh/vp-ranjit-singh';
import { VPssPage } from '../pages/vp-sathi-senathirajah/vp-sathi-senathirajah';
import { VPtgPage } from '../pages/vp-tg-kintanar/vp-tg-kintanar';


import { WhattoPage } from '../pages/whatto/whatto';
import { WhattoPageAR } from '../pages/whatto-ar/whatto-ar';
import { WhattoPageFR } from '../pages/whatto-fr/whatto-fr';
import { WhattoPageID } from '../pages/whatto-id/whatto-id';
import { WhattoPageRU } from '../pages/whatto-ru/whatto-ru';
import { WhattoPageTR } from '../pages/whatto-tr/whatto-tr';

import { WheretoPage } from '../pages/whereto/whereto';
import { WheretoPageAR } from '../pages/whereto-ar/whereto-ar';
import { WheretoPageFR } from '../pages/whereto-fr/whereto-fr';
import { WheretoPageID } from '../pages/whereto-id/whereto-id';
import { WheretoPageRU } from '../pages/whereto-ru/whereto-ru';
import { WheretoPageTR } from '../pages/whereto-tr/whereto-tr';

import { HowtoPage } from '../pages/howto/howto';
import { HowtoPageAR } from '../pages/howto-ar/howto-ar';
import { HowtoPageFR } from '../pages/howto-fr/howto-fr';
import { HowtoPageID } from '../pages/howto-id/howto-id';
import { HowtoPageRU } from '../pages/howto-ru/howto-ru';
import { HowtoPageTR } from '../pages/howto-tr/howto-tr';
import { SplashPage } from '../pages/splash/splash';
import { ChangeLangPage } from '../pages/changelang/changelang';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SplashPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePageAR },
      { title: 'All About V-UAE 2017', component: allAboutPage },
      { title: 'News and Updates', component: NewslandingPageAR },
      { title: 'The Speakers', component: TheSpeakersPage },
      { title: 'Daily Program Schedule', component: SchedPageAR },
      { title: 'Dubai 101', component: Dubai101PageAR },
      { title: 'Merchandise', component: MerchandisePageAR },
      { title: 'Make Your V-Con Mark', component: MarkPageAR },
      { title: '#VUAE17 Wallpapers', component: DownloadsPageAR },
      { title: 'FAQs', component: FaqsPageAR },
      { title: 'Contact Us', component: ContactPageAR },
      { title: 'Change Language', component: ChangeLangPage }
    ];


//      this.pages = [
//      { title: 'Home', component: HomePage },
//      { title: 'All About V-UAE 2017', component: allAboutPage },
//      { title: 'News and Updates', component: NewslandingPage },
//      { title: 'The Speakers', component: TheSpeakersPage },
//      { title: 'Daily Program Schedule', component: SchedPage },
//      { title: 'Dubai 101', component: Dubai101Page },
//      { title: 'Merchandise', component: MerchandisePage },
//      { title: 'Make Your V-Con Mark', component: MarkPage },
//      { title: '#VUAE17 Wallpapers', component: DownloadsPage },
//      { title: 'FAQs', component: FaqsPage },
//      { title: 'Contact Us', component: ContactPage },
//      { title: 'Change Language', component: ChangeLangPage }
//    ];

//      this.pages = [
//      { title: 'Home', component: HomePage },
//      { title: 'All About V-UAE 2017', component: allAboutPage },
//      { title: 'News and Updates', component: NewslandingPage },
//      { title: 'The Speakers', component: TheSpeakersPage },
//      { title: 'Daily Program Schedule', component: SchedPage },
//      { title: 'Dubai 101', component: Dubai101Page },
//      { title: 'Merchandise', component: MerchandisePage },
//      { title: 'Make Your V-Con Mark', component: MarkPage },
//      { title: '#VUAE17 Wallpapers', component: DownloadsPage },
//      { title: 'FAQs', component: FaqsPage },
//      { title: 'Contact Us', component: ContactPage },
//      { title: 'Change Language', component: ChangeLangPage }
//    ];

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
