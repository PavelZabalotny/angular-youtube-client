import { Component, EventEmitter, Output } from '@angular/core'
import { FilterService } from '../../shared/services/filter.service'

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Output() clickSettings = new EventEmitter<boolean>()

  constructor(private filter: FilterService) {
  }

  value = ''

  onClickSettings(): void {
    this.clickSettings.emit()
    this.filter.filterValue = ''
  }
}
