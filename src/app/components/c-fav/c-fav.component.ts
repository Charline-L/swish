import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-c-fav',
  templateUrl: './c-fav.component.html',
  styleUrls: ['./c-fav.component.sass']
})
export class CFavComponent {

  @Input() className: String
  @Input() isFav: Boolean = false

  constructor() {}

  toggleFav() {
    this.isFav = !this.isFav
  }
}
