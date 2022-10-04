import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Output() clickSettings = new EventEmitter<boolean>()

  value = ''

  onClickSettings(): void {
    this.clickSettings.emit()
  }

}
