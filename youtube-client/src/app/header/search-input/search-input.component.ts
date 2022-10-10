import { Component, EventEmitter, Output } from '@angular/core'
import { FilterService } from '../../shared/services/filter.service'
import { ResultsService } from '../../shared/services/results.service'

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Output() clickSettings = new EventEmitter<boolean>()

  constructor(private filter: FilterService, private results: ResultsService) {
  }

  value = ''

  onClickSettings(): void {
    this.clickSettings.emit()
    this.filter.value = ''
  }

  isDisabled(value: string): boolean {
    return value.trim().length === 0
  }

  clearValue(): void {
    this.value = ''
  }

  onClickSearchButton(): void {
    this.results.isShow = true
  }
}
