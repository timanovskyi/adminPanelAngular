import { Component } from '@angular/core';
import { ProgressBarService } from './core/services/progress-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _progressService: ProgressBarService) {
  }

  get isActive() {
    return this._progressService.isActive
  }
}
