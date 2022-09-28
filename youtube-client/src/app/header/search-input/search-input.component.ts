import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Output() onClickSettings = new EventEmitter<boolean>()
  value = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  handleClickSettings(): void {
    this.onClickSettings.emit()
  }

}
