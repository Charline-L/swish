import { Component } from '@angular/core';

@Component({
  selector: 'app-p-badges',
  templateUrl: './p-badges.component.html',
  styleUrls: ['./p-badges.component.sass']
})
export class PBadgesComponent {

  public isOpen: Boolean = false
  public percent: Number = 0
  public objectif: Number = 0
  public percentRealised: Number = 0
  public description: String

  constructor() { }

  updatePopin(event) {

    this.description = event.description
    this.isOpen = event.isOpen
    this.percent = event.percent
    this.objectif = event.objectif
    this.percentRealised = Math.trunc(Number(this.percent)  * 100 / Number(this.objectif))
  }
}
