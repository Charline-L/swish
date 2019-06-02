import {AfterViewInit, Component} from '@angular/core';
import Hammer from 'hammerjs';

@Component({
  selector: 'app-c-navigation',
  templateUrl: './c-navigation.component.html',
  styleUrls: ['./c-navigation.component.sass']
})
export class CNavigationComponent implements AfterViewInit{

  public isLongPress = false
  public isLongPressDone = false

  private touchHammer = null
  private timerLongPress = null

  private $nav = null
  private $navTraining = null

  constructor() { }

  ngAfterViewInit() {

    this.getDOM();
    this.prepareHammer();
    this.bindEvents();
  }

  getDOM() {

    this.$nav = document.querySelector('.c-navigation')
    this.$navTraining = this.$nav.querySelector('.js-touch-nav')
  }

  prepareHammer() {

    this.touchHammer = new Hammer(this.$navTraining)
  }

  bindEvents() {

    this.$navTraining.addEventListener('touchstart', this.longPressStart.bind(this))
  }

  longPressStart(){

    // reset les données
    this.isLongPressDone = false
    clearTimeout(this.timerLongPress)

    // ajoute le flag
    this.isLongPress = true

    // lance le timer
    this.timerLongPress = setTimeout(() => {
      if (this.isLongPress) this.isLongPressDone = true
    }, 1000)
  }
}
