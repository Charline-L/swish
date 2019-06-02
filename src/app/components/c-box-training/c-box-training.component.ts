import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-c-box-training',
  templateUrl: './c-box-training.component.html',
  styleUrls: ['./c-box-training.component.sass']
})

export class CBoxTrainingComponent {

  @Input() className: String
  @Input() isFav: Boolean
  @Input() level: Number
  @Input() duration: Number
  @Input() hasFilter: Boolean = false
  @Input() filter: Object

  constructor() {}


}
