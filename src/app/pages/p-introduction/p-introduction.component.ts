/*
Imports
*/
import {AfterViewInit, Component} from '@angular/core';
import {slideshow} from './slideshow.data';
import anime from 'animejs';
import Hammer from 'hammerjs';


@Component({
  selector: 'app-p-introduction',
  templateUrl: './p-introduction.component.html',
  styleUrls: ['./p-introduction.component.sass']
})

export class PIntroductionComponent implements AfterViewInit {

  public slides = slideshow.slides;
  private $slideshow = null;
  private $slidesContainer = null;
  private $slides = null;
  private $buttons = null;
  private $dots = null;
  private $image = null;

  private scale = 1;

  private swipperHammer = null;
  private currentSlide = 0;
  private classNameDotActive = 'p-introduction__dot--active';
  private maxSlide = 0;

  private isAnimating = false;

  ngAfterViewInit() {

    this.getDOM();
    this.prepareSlides();
    this.prepareHammer();
    this.bindEvents();
  }

  getDOM() {

    // récupère notre slideshow
    this.$slideshow = document.querySelector('.p-introduction');

    // récupère nos slides
    this.$slides = this.$slideshow.querySelectorAll('.p-introduction__slide');

    // recupère notre container de slides
    this.$slidesContainer = this.$slideshow.querySelector('.p-introduction__bottom')

    // récupère nos bouttons
    this.$buttons = this.$slideshow.querySelectorAll('.p-introduction__button');

    // récupère nos points
    this.$dots = this.$slideshow.querySelectorAll('.p-introduction__dot');

    // récupère notre image
    this.$image = this.$slideshow.querySelector('.p-introduction__image')
  }

  prepareSlides() {

    // défini la taille de notre container
    let maxH = 0
    for( let i = 0; i < this.$slides.length; i++) maxH = Math.max(this.$slides[i].offsetHeight, maxH)
    anime.set(this.$slidesContainer, {
      height: maxH
    })

    // cache les slides
    anime.set(this.$slides, {
      opacity: 0,
      pointerEvents: 'none',
      zIndex: -1
    })

    // affiche la première slide
    anime.set(this.$slides[this.currentSlide], {
      opacity: 1,
      pointerEvents: 'auto',
      zIndex: 0,
    })

    // séléctionne le premier point
    this.$dots[this.currentSlide].classList.add(this.classNameDotActive)

    // set variables
    this.maxSlide = this.$slides.length - 1
  }

  bindEvents() {

    // ajoute clic des boutons
    for (const $button of this.$buttons) {

      $button.addEventListener('click', this.slideNext.bind(this))
    }

    // ajoute le swipe
    this.swipperHammer.on('swipeleft', this.slideNext.bind(this) )
    this.swipperHammer.on('swiperight', this.slidePrev.bind(this) )
  }

  prepareHammer() {

    this.swipperHammer = new Hammer(this.$slideshow)
  }

  slideNext() {

    // vérifie qu' il n'y a pas déjà une animation en cours
    if (this.isAnimating || this.currentSlide === this.maxSlide) return false;

    // block animation
    this.isAnimating = true;

    // calcul le prochain index
    const nextSlide = this.currentSlide + 1;

    // lance animation
    this.slideAnimation(nextSlide, 1)
  }

  slidePrev() {

    // vérifie si possible
    if (this.isAnimating || this.currentSlide === 0) return false;

    // bloque le swipe
    this.isAnimating = true

    // calcul le prochain index
    const nextSlide = this.currentSlide - 1;

    // lance animation
    this.slideAnimation(nextSlide, -1)
  }

  slideAnimation(nextSlide, direction) {

    // met à la jour la taille de l'image
    this.scale += 0.25 * direction

    // vérifie notre direction
    const duration = 500

    // en fonction de la direction défini nos variables
    const $firstSlidetoAnimate = this.$slides[this.currentSlide]
    const $secondSlidetoAnimate = this.$slides[nextSlide]

    // défini nos sélecteurs
    const $firstText = $firstSlidetoAnimate.querySelector('.p-introduction__text')
    const $firstTitle = $firstSlidetoAnimate.querySelector('.p-introduction__title')
    const $firstButton = $firstSlidetoAnimate.querySelector('.p-introduction__button')
    const $secondTitle = $secondSlidetoAnimate.querySelector('.p-introduction__title')
    const $secondText = $secondSlidetoAnimate.querySelector('.p-introduction__text')
    const $secondButton = $secondSlidetoAnimate.querySelector('.p-introduction__button')

    // prépare nos éléménet sà animer
    anime.set($secondTitle, {
      opacity: 0,
      translateY: 20 * direction
    })

    anime.set($secondText, {
      opacity: 0,
      translateY: 20 * direction
    })

    anime.set($secondButton, {
      opacity: 0,
      translateY: 20 * direction
    })

    anime.set($firstSlidetoAnimate, {
      zIndex: 0,
      pointerEvents: 'none',
    })

    anime.set($secondSlidetoAnimate, {
      zIndex: 1,
      opacity: 1,
      pointerEvents: 'initial',
    })

    // défini notre timeline
    const timeline = anime.timeline({
      easing: 'easeOutQuart',
      duration: duration
    });

    // animation
    timeline
      .add({
        targets: $firstTitle,
        opacity: 0,
        translateY: -20 * direction,
      })
      .add({
        targets: $firstText,
        opacity: 0,
        translateY: -20 * direction,
      }, '-=' + duration * 0.5)
      .add({
        targets: $firstButton,
        opacity: 0,
        translateY: -20 * direction,
      }, '-=' + duration * 0.5)
      .add({
        targets: $secondTitle,
        translateY: 0,
        opacity: 1,
      }, '-=' + duration * 0.5)
      .add({
        targets: $secondText,
        translateY: 0,
        opacity: 1,
      }, '-=' + duration * 0.5)
      .add({
        targets: $secondButton,
        translateY: 0,
        opacity: 1,
      }, '-=' + duration * 0.5)
      .add({
        targets: this.$image,
        scale: this.scale,
        duration: duration * 4
      }, 0)

    // lance animation
    timeline.play()

    // change le point
    this.$dots[this.currentSlide].classList.remove(this.classNameDotActive)
    this.$dots[nextSlide].classList.add(this.classNameDotActive)

    // une fois finie
    timeline.finished.then(() => {

      // change les events
      anime.set(this.$slides[this.currentSlide], {
        zIndex: -1
      })

      // change le current slide
      this.currentSlide = nextSlide

      // débloque le slideshow
      this.isAnimating = false
    })
  }
}
