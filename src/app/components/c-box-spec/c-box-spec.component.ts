import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-c-box-spec',
  templateUrl: './c-box-spec.component.html',
  styleUrls: ['./c-box-spec.component.sass']
})
export class CBoxSpecComponent{

  @Input() imageName: String
  @Input() title: String
  @Input() number: String

  constructor() { }

}
