import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { allAboutPage } from '../pages/allabout/allabout';
import { NewslandingPage } from '../pages/newslanding/newslanding';
import { NewsPage } from '../pages/news/news';
import { TheSpeakersPage } from '../pages/thespeakers/thespeakers';
import { SchedPage } from '../pages/sched/sched';
import { Dubai101Page } from '../pages/dubai101/dubai101';
import { MerchandisePage } from '../pages/merchandise/merchandise';
import { MarkPage } from '../pages/mark/mark';
import { DownloadsPage } from '../pages/downloads/downloads';
import { FaqsPage } from '../pages/faqs/faqs';
import { ContactPage } from '../pages/contact/contact';
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


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewslandingPage,
    NewsPage,
    allAboutPage,
    TheSpeakersPage,
    SchedPage,
    Dubai101Page,
    MerchandisePage,
    MarkPage,
    DownloadsPage,
    FaqsPage,
    ContactPage,
    ChangeLangPage,
    SplashPage,
    SplashnextPage,
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
    HomePage,
    NewslandingPage,
    NewsPage,
    allAboutPage,
    TheSpeakersPage,
    SchedPage,
    Dubai101Page,
    MerchandisePage,
    MarkPage,
    DownloadsPage,
    FaqsPage,
    ContactPage,
    ChangeLangPage,
    SplashPage,
    SplashnextPage,
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
