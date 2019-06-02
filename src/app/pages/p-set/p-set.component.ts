import {AfterViewInit, Component} from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-p-set',
  templateUrl: './p-set.component.html',
  styleUrls: ['./p-set.component.sass']
})
export class PSetComponent implements AfterViewInit {

  private $progress = null;
  private $button = null;
  private $ball = null;

  private pathA = null;
  private pathB = null;
  private pathC = null;
  private pathD = null;

  private progress = 0;

  constructor() {}

  ngAfterViewInit() {

    this.getDOM();
    this.setUpBall();
  }

  getDOM() {

    // récupère la barre de progression
    this.$progress = document.querySelector('.p-set__progress')

    // récupère le boutton
    this.$button = document.querySelector('.p-set__button')

    // récupère nos chemins
    this.pathA = anime.path('#pathA');
    this.pathB = anime.path('#pathB');
    this.pathC = anime.path('#pathC');
    this.pathD = anime.path('#pathD');

    // récupère notre ballon
    this.$ball = document.querySelector('#ball')
  }

  setUpBall() {

    // chemin de départ
    const path = anime.path('#pathO');

    anime({
      targets: this.$ball,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      duration: 0
    });
  }

  addProgress() {

    // si déjà fini
    if (this.progress === 4) return null;

    // incrémente notre variable
    this.progress++

    // calcul le pourcentage
    const percent = 25 * this.progress

    // récupère le chemin a ssocié
    let pathLetter = ""
    switch (this.progress) {
      case 1:
          pathLetter = "A"
          break
      case 2:
        pathLetter = "B"
        break
      case 3:
        pathLetter = "C"
        break
      case 4:
        pathLetter = "D"
        break
      default:
        console.warn("Progress to high")
    }

    const path = anime.path("#path" + pathLetter)

    // prépare la timeline
    const timeline = anime.timeline({
      easing: 'easeOutQuart',
      duration: 500
    });

    timeline
      .add({
        targets: this.$ball,
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        easing: 'linear',
      })
      .add({
        targets: this.$progress,
        width: percent + "%",
        duration: 500,
        easing: 'easeOutQuart',
      })

    timeline.finished.then(() => {
      if (this.progress === 4) this.endProgress()
    })
  }

  endProgress() {

    // affiche le bouton
    // this.$button.classList.add('p-set__button--active')
  }
}
