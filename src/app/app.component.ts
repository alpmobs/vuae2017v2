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

  rootPage: any = HowtoPageAR;
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


//      this.pages = [
//      { title: 'الرئيسية', component: HomePageAR },
//      { title: 'كل ما يخص V-UAE 2017', component: allAboutPageAR },
//      { title: 'الأخبار والمستجدات', component: NewslandingPageAR },
//      { title: 'المتحدثين', component: TheSpeakersPageAR },
//      { title: 'الجدول اليومي للبرنامج', component: SchedPageAR },
//      { title: 'دبي 101', component: Dubai101PageAR },
//      { title: 'معروضات #VCON17', component: MerchandisePageAR },
//      { title: 'ضع علامتك للفي-كون', component: MarkPageAR },
//      { title: 'صور خلفيات #VCON17', component: DownloadsPageAR },
//      { title: 'الأسئلة الشائعة', component: FaqsPageAR },
//      { title: 'اتصل بنا', component: ContactPageAR },
//      { title: 'أختار اللغة', component: ChangeLangPageAR }
//    ];

//      this.pages = [
//      { title: 'ACCUEIL', component: HomePageFR },
//      { title: 'Tout sur le V-UAE 2017', component: allAboutPageFR },
//      { title: 'Actualité et Mises à jour', component: NewslandingPageFR },
//      { title: 'Les Orateurs', component: TheSpeakersPageFR },
//      { title: 'Grille de programme quotidienne', component: SchedPageFR },
//      { title: 'Dubai 101', component: Dubai101PageFR },
//      { title: 'Marchandise', component: MerchandisePageFR },
//      { title: 'Faites votre marque V-Con', component: MarkPageFR },
//      { title: '#VUAE17 Fonds d’écran', component: DownloadsPageFR },
//      { title: 'FAQs', component: FaqsPageFR },
//      { title: 'Contactez-nous', component: ContactPageFR },
//      { title: 'Sélectionnez une langue', component: ChangeLangPageFR }
//    ];

//      this.pages = [
//      { title: 'Home', component: HomePageID },
//      { title: 'All About V-UAE 2017', component: allAboutPageID },
//      { title: 'News and Updates', component: NewslandingPageID },
//      { title: 'The Speakers', component: TheSpeakersPageID },
//      { title: 'Daily Program Schedule', component: SchedPageID },
//      { title: 'Dubai 101', component: Dubai101PageID },
//      { title: 'Merchandise', component: MerchandisePageID },
//      { title: 'Make Your V-Con Mark', component: MarkPageID },
//      { title: '#VUAE17 Wallpapers', component: DownloadsPageID },
//      { title: 'FAQs', component: FaqsPageID },
//      { title: 'Contact Us', component: ContactPageID },
//      { title: 'Change Language', component: ChangeLangPageID }
//    ];

//      this.pages = [
//      { title: 'ДОМАШНЯЯ СТРАНИЦА', component: HomePageRU },
//      { title: 'Всё о V-UAE 2017', component: allAboutPageRU },
//      { title: 'Новости и объявления', component: NewslandingPageRU },
//      { title: 'Спикеры', component: TheSpeakersPageRU },
//      { title: 'Ежедневное расписание', component: SchedPageRU },
//      { title: 'Дубай 101', component: Dubai101PageRU },
//      { title: 'Товары #VCON17', component: MerchandisePageRU },
//      { title: 'Сделай свой значок V-Con', component: MarkPageRU },
//      { title: 'Обои #VCON17', component: DownloadsPageRU },
//      { title: 'Вопросы-ответы', component: FaqsPageRU },
//      { title: 'Контакты', component: ContactPageRU },
//      { title: 'Выбор языка', component: ChangeLangPageRU }
//    ];

//      this.pages = [
//      { title: 'ANA SAYFA', component: HomePageTR },
//      { title: 'V-UAE 2017 Hakkında Her Şey', component: allAboutPageTR },
//      { title: 'Haberler ve Güncellemeler', component: NewslandingPageTR },
//      { title: 'Konuşmacılar', component: TheSpeakersPageTR },
//      { title: 'Günlük Program ', component: SchedPageTR },
//      { title: 'Dubai 101', component: Dubai101PageTR },
//      { title: 'V-UAE 2017 Ürünleri', component: MerchandisePageTR },
//      { title: 'V-Con İzinizi Oluşturun', component: MarkPageTR },
//      { title: 'V-UAE 2017 Duvar Kağıtları', component: DownloadsPageTR },
//      { title: 'SSS', component: FaqsPageTR },
//      { title: 'Bizimle İletişime Geçin', component: ContactPageTR },
//      { title: 'Dil Seçin', component: ChangeLangPageTR }
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
