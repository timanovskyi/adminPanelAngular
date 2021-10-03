import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterSubscriber } from './services/router-subscriber.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    RouterSubscriber
  ]
})
export class CoreModule {
  constructor(loc: RouterSubscriber) {
    loc.addSubs();
  }
}
