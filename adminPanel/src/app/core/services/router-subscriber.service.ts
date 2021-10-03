import { Injectable } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ProgressBarService } from './progress-bar.service';

@Injectable()
export class RouterSubscriber {

  constructor(private _router: Router,
              private _bgp: ProgressBarService) {

  }

  addSubs() {
    this._router.events
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          this._bgp.start();
          return;
        }
        if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
          this._bgp.stop();
          return;
        }
      });
  }
}
