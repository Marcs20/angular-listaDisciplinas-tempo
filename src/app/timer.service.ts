import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  constructor() {}

  private timer: any;
  private counter = 0;

  start(ms: number) {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.counter++;
      }, ms);
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  getCount() {
    return this.counter;
  }

  timerZero() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      this.counter = 0;
    }
  }
}
