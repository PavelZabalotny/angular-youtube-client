import { Component, EventEmitter, Output } from '@angular/core'
import { Router } from '@angular/router'
import { FilterService } from '../../../youtube/services/filter/filter.service'
import { ResultsService } from '../../../youtube/services/results/results.service'

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Output() clickSettings = new EventEmitter<boolean>()

  constructor(
    private filter: FilterService,
    private results: ResultsService,
    private router: Router,
  ) {
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
    this.router.navigate(['/youtube'])
  }
}
