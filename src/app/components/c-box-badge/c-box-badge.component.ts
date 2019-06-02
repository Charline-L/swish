import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-c-box-badge',
  templateUrl: './c-box-badge.component.html',
  styleUrls: ['./c-box-badge.component.sass']
})

export class CBoxBadgeComponent implements OnInit{

  @Input() className: String
  @Input() percent: Number
  @Input() objectif: Number
  @Input() description: String

  @Output() update = new EventEmitter<Object>();

  public isFull: Boolean = false
  public strokeValue: Number

  constructor() {}

  ngOnInit() {

    this.isFull = this.percent === this.objectif
    this.strokeValue = this.isFull ? 920 * 2 : 920 * ( Number(1) + Number(this.percent) / Number(this.objectif) )
  }

  public openPopin() {

    this.update.emit({isOpen: true, percent: this.percent, objectif: this.objectif, description: this.description})
  }
}
