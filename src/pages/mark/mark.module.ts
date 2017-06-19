import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkPage } from '../mark/mark';

@NgModule({
  declarations: [
    MarkPage,
  ],
  imports: [
    IonicPageModule.forChild(MarkPage),
  ],
  exports: [
    MarkPage
  ]
})
export class MarkPageModule {}
