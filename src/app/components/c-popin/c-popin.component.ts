import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-c-popin',
  templateUrl: './c-popin.component.html',
  styleUrls: ['./c-popin.component.sass']
})
export class CPopinComponent implements OnInit{

  @Input() isFull: Boolean
  @Input() percent: Number
  @Input() objectif: Number
  @Input() isOpen: Boolean
  @Input() percentRealised: Number
  @Input() description: String

  @Output() update = new EventEmitter<Object>();

  public strokeValue: Number

  constructor() { }

  ngOnInit() {

    this.strokeValue = this.isFull ? 920 * 2 : 920 * ( Number(1) + Number(this.percent) / Number(this.objectif) )
  }

  public closePopin() {

    this.update.emit({isOpen: false, percent: 0})
  }
}
