import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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
import { WheretoPage } from '../pages/whereto/whereto';
import { HowtoPage } from '../pages/howto/howto';
import { ChangeLangPage } from '../pages/changelang/changelang';
import { SplashPage } from '../pages/splash/splash';

import { SplashnextPage } from '../pages/splashnext/splashnext';
import { SplashnextPageAR } from '../pages/splashnext-ar/splashnext-ar';
import { SplashnextPageFR } from '../pages/splashnext-fr/splashnext-fr';
import { SplashnextPageID } from '../pages/splashnext-id/splashnext-id';
import { SplashnextPageRU } from '../pages/splashnext-ru/splashnext-ru';
import { SplashnextPageTR } from '../pages/splashnext-tr/splashnext-tr';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage, HomePageAR, HomePageID, HomePageRU, HomePageFR, HomePageTR,

    NewslandingPage, NewslandingPageAR, NewslandingPageID, NewslandingPageFR, NewslandingPageRU, NewslandingPageTR,

    NewsPage, NewsPageAR, NewsPageFR, NewsPageID, NewsPageRU, NewsPageTR,

    allAboutPage, allAboutPageAR, allAboutPageFR, allAboutPageID, allAboutPageRU, allAboutPageTR,

    TheSpeakersPage, TheSpeakersPageAR, TheSpeakersPageID, TheSpeakersPageFR, TheSpeakersPageRU, TheSpeakersPageTR,

    SchedPage, SchedPageAR, SchedPageFR, SchedPageID, SchedPageRU, SchedPageTR,

    Dubai101Page, Dubai101PageAR, Dubai101PageFR, Dubai101PageID, Dubai101PageRU, Dubai101PageTR,

    MerchandisePage, MerchandisePageAR, MerchandisePageID, MerchandisePageFR, MerchandisePageRU, MerchandisePageTR,

    MarkPage, MarkPageAR, MarkPageID, MarkPageFR, MarkPageRU, MarkPageTR,

    DownloadsPage, DownloadsPageAR, DownloadsPageID, DownloadsPageFR, DownloadsPageRU, DownloadsPageTR,

    FaqsPage, FaqsPageAR, FaqsPageID, FaqsPageFR, FaqsPageRU, FaqsPageTR,
    ContactPage, ContactPageID, ContactPageFR, ContactPageAR, ContactPageRU, ContactPageTR,

    ChangeLangPage,
    SplashPage,
    SplashnextPage, SplashnextPageAR, SplashnextPageFR, SplashnextPageID, SplashnextPageRU, SplashnextPageTR,
    WheretoPage,
    WhattoPage,
    HowtoPage,
    VFPPage,
    VMPPage,
    VPahPage,
    VPagPage,
    VPcmPage,
    VPdsPage,
    VPdjPage,
    VPdwPage,
    VPdiPage,
    VPmqPage,
    VPftPage,
    VPhnPage,
    VPkpPage,
    VPksPage,
    VPmkPage,
    VPpsPage,
    VPrsPage,
    VPssPage,
    VPtgPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, HomePageAR, HomePageID, HomePageFR, HomePageRU, HomePageTR,
    NewslandingPage, NewslandingPageAR, NewslandingPageID, NewslandingPageFR, NewslandingPageRU, NewslandingPageTR,

    NewsPage, NewsPageAR, NewsPageFR, NewsPageID, NewsPageRU, NewsPageTR,

    allAboutPage, allAboutPageAR, allAboutPageFR, allAboutPageID, allAboutPageRU, allAboutPageTR,

    TheSpeakersPage, TheSpeakersPageAR, TheSpeakersPageID, TheSpeakersPageFR, TheSpeakersPageRU, TheSpeakersPageTR,

    SchedPage, SchedPageAR, SchedPageFR, SchedPageID, SchedPageRU, SchedPageTR,

    Dubai101Page, Dubai101PageAR, Dubai101PageFR, Dubai101PageID, Dubai101PageRU, Dubai101PageTR,

    MerchandisePage, MerchandisePageAR, MerchandisePageID, MerchandisePageFR, MerchandisePageRU, MerchandisePageTR,

    MarkPage, MarkPageAR, MarkPageID, MarkPageFR, MarkPageRU, MarkPageTR,

    DownloadsPage, DownloadsPageAR, DownloadsPageID, DownloadsPageFR, DownloadsPageRU, DownloadsPageTR,

    FaqsPage, FaqsPageAR, FaqsPageID, FaqsPageFR, FaqsPageRU, FaqsPageTR,
    ContactPage, ContactPageID, ContactPageFR, ContactPageAR, ContactPageRU, ContactPageTR,
    ChangeLangPage,
    SplashPage,
    SplashnextPage, SplashnextPageAR, SplashnextPageFR, SplashnextPageID, SplashnextPageRU, SplashnextPageTR,
    WheretoPage,
    WhattoPage,
    HowtoPage,
    VFPPage,
    VMPPage,
    VPahPage,
    VPagPage,
    VPcmPage,
    VPdsPage,
    VPdjPage,
    VPdwPage,
    VPdiPage,
    VPmqPage,
    VPftPage,
    VPhnPage,
    VPkpPage,
    VPksPage,
    VPmkPage,
    VPpsPage,
    VPrsPage,
    VPssPage,
    VPtgPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
