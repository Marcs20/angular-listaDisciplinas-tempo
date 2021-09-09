import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  ms: number;

  constructor(public timer: TimerService) {
    this.timer.start(1000);
  }

  ngOnInit() {}
}
