import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c-search',
  templateUrl: './c-search.component.html',
  styleUrls: ['./c-search.component.sass']
})
export class CSearchComponent {

  @Input() name: string;
  @Input() placeholder: string;

  constructor() { }

}
