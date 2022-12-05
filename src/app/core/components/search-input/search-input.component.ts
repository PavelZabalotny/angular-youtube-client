import { Component, EventEmitter, Output } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { FilterService } from '../../../youtube/services/filter/filter.service'
import { ResultsService } from '../../../youtube/services/results/results.service'
import { loadSearchResponse } from '../../../redux/actions/youtube.actions'

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Output() clickSettings = new EventEmitter<boolean>()
  inputValue = ''

  constructor(
    private filter: FilterService,
    private results: ResultsService,
    private router: Router,
    private store: Store,
  ) {
  }

  onClickSettings(): void {
    this.clickSettings.emit()
    this.filter.value = ''
  }

  isDisabled(value: string): boolean {
    return value.trim().length === 0
  }

  clearValue(): void {
    this.inputValue = ''
  }

  onChange(event: KeyboardEvent) {
    const { value } = <HTMLInputElement>event.target
    const { length } = value.trim()
    if (length >= 3) {
      this.store.dispatch(loadSearchResponse({ query: value }))
      this.results.isShow = true
      this.router.navigate(['/youtube'])
    }
  }
}
