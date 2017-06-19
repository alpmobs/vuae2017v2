import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { allAboutPage } from '../allabout/allabout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
allAboutPage = allAboutPage;

  constructor() {

  }

}
