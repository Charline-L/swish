import {AfterViewInit, Component} from '@angular/core';
import anime from 'animejs';


@Component({
  selector: 'app-p-trainings',
  templateUrl: './p-trainings.component.html',
  styleUrls: ['./p-trainings.component.sass']
})
export class PTrainingsComponent implements AfterViewInit {

  private $filters = null
  private $containerFilterResult = null
  private $containerBlocks = null

  private numberOfFilters: Number = 0
  private isFiltering: Boolean = false

  public filter: Object = {
    duration: null,
    level: null,
  }

  constructor() { }

  ngAfterViewInit() {

    this.getDOM();
  }

  getDOM() {

    this.$filters = document.querySelectorAll('.p-training-filters__item')
    this.$containerFilterResult = document.querySelector('.p-training__list-filter')
    this.$containerBlocks = document.querySelectorAll('.js-block-training')
  }

  public isUpdatingFilter(filter: {add: Number, name: string, value: Number}) {

    // récupère les données
    const addNumber = filter.add

    // met à jour notre nombre de  slides
    this.numberOfFilters = Number(this.numberOfFilters) + Number(addNumber)

    // lance l'animation en fonction de l'action
    if (this.numberOfFilters === 0) this.animateCloseFilter()
    else if (this.numberOfFilters !== 0 && !this.isFiltering) this.animateOpenFilter()
    else this.animateKeepFilter()

    // met à jour les filters
    setTimeout(() => {
      this.filter[filter.name] = filter.value
    }, 500)

    // met à jour notre flag
    this.isFiltering = this.numberOfFilters !== 0
  }


  private animateOpenFilter() {

    return new Promise( (resolve, reject) => {

      // prépare animation
      anime.set(this.$containerFilterResult, {
        opacity: 0,
        translateY: 20
      })

      const timeline = anime.timeline({
        easing: 'easeOutQuart',
        duration: 250
      });

      timeline
        .add({
          targets: this.$containerBlocks,
          translateY: 20,
          opacity: 0,

          complete: () => {
            anime.set(this.$containerBlocks, {
              display: 'none'
            })
          }
        })
        .add({
          targets: this.$containerFilterResult,
          translateY: 0,
          opacity: 1,

          begin: () => {
            anime.set(this.$containerFilterResult, {
              display: 'flex'
            })
          }
        })

      // lance animation
      timeline.play()

      // quand fini
      timeline.finished.then(() => resolve())
    })
  }

  private animateCloseFilter() {

    // prépare animation
    const timeline = anime.timeline({
      easing: 'easeInOutQuart',
      duration: 500
    });

    timeline
      .add({
        targets: this.$containerFilterResult,
        translateY: 20,
        opacity: 0,

        complete: () => {
          anime.set(this.$containerFilterResult, {
            display: 'none'
          })
        }
      })
      .add({
        targets: this.$containerBlocks,
        translateY: 0,
        opacity: 1,

        begin: () => {
          anime.set(this.$containerBlocks, {
            display: 'block',
            opacity: 0,
            translateY: 20
          })
        }
      })

    // lance animation
    timeline.play()
  }

  private animateKeepFilter() {

    // prépare animation
    const timeline = anime.timeline({
      easing: 'easeInOutQuart',
      duration: 500
    });

    timeline
      .add({
        targets: this.$containerFilterResult,
        translateY: 20,
        opacity: 0,
      })
      .add({
        targets: this.$containerFilterResult,
        translateY: 0,
        opacity: 1,
      })

    // lance animation
    timeline.play()
  }
}

