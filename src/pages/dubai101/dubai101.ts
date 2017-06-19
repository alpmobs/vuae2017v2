import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WhattoPage } from '../whatto/whatto';
import { WheretoPage } from '../whereto/whereto';
import { HowtoPage } from '../howto/howto';


@Component({
  selector: 'page-dubai101',
  templateUrl: 'dubai101.html'
})
export class Dubai101Page {
HowtoPage = HowtoPage;
WheretoPage = WheretoPage;
WhattoPage = WhattoPage;
  constructor() {}

}
