import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-c-filter',
  templateUrl: './c-filter.component.html',
  styleUrls: ['./c-filter.component.sass']
})
export class CFilterComponent{

  @Input() values: Array<any>
  @Input() tagName: String
  @Input() filterName: String
  @Input() isSelected: Boolean

  @Output() update = new EventEmitter<{add: Number, name: String, value: Number}>();

  public currentValueIndex: Number = 0

  constructor() { }

  updateFilter() {

    // pour comparer l'évolution
    const lastState = this.isSelected

    // met à jour le filtre "style"
    this.currentValueIndex = Number(this.currentValueIndex) < Number(this.values.length) ? Number(this.currentValueIndex) + 1 : 0
    this.isSelected = this.currentValueIndex !== 0

    // envoi l'information au parent
    if (!this.isSelected) this.update.emit({add: -1, name: this.filterName, value: 0})
    else if (this.isSelected && !lastState) this.update.emit({add: 1, name: this.filterName, value : this.values[Number(Number(this.currentValueIndex) - 1)] })
    else this.update.emit({add: 0, name: this.filterName, value : this.values[Number(Number(this.currentValueIndex) - 1)] })
  }
}
