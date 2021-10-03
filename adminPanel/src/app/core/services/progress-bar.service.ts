import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  private count = 0;

  get isActive(): boolean {
    return this.count > 0;
  }

  start() {
    this.count++;
  }

  stop() {
    this.count--;
  }
}
