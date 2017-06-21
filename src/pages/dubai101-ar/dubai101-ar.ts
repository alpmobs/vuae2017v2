import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WhattoPage } from '../whatto/whatto';
import { WheretoPage } from '../whereto/whereto';
import { HowtoPage } from '../howto/howto';
import { SchedPage } from '../sched/sched';
import { MerchandisePage } from '../merchandise/merchandise';

@Component({
  selector: 'page-dubai101',
  templateUrl: 'dubai101-ar.html'
})
export class Dubai101PageAR {
MerchandisePage = MerchandisePage;
SchedPage = SchedPage;
HowtoPage = HowtoPage;
WheretoPage = WheretoPage;
WhattoPage = WhattoPage;
  constructor() {}

}
