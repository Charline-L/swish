import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-p-record-training',
  templateUrl: './p-record-training.component.html',
  styleUrls: ['./p-record-training.component.sass']
})
export class PRecordTrainingComponent implements OnInit {

  public isFinished: Boolean = false
  private currentTimer: Number = 0
  private intervalTimer: any
  private isFreeTraining: Boolean = false

  constructor(
    private route: ActivatedRoute
  ) {

    // récupère le temps
    this.route.queryParams.subscribe(params => {
      this.currentTimer = params['time'] ? params['time'] : 0
      this.isFreeTraining = params['free']
    })
  }

  ngOnInit() {

    if (this.isFreeTraining) {

      // lance le timer
      this.intervalTimer = setInterval(() => {
        this.currentTimer = Number(this.currentTimer) + 1
      }, 1000)
    }
    else {

      // lance le timer
      this.intervalTimer = setInterval(() => {
        if (this.currentTimer === 1) this.stopTimer()
        else this.currentTimer = Number(this.currentTimer) - 1
      }, 1000)
    }
  }

  stopTimer() {

    this.isFinished = true
    clearInterval(this.intervalTimer)
  }
}
