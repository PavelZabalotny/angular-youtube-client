import { Component } from '@angular/core'
import { ISearchResponse } from '../search-response.model'
import { response } from './mock-response.model'
import { ISearchItem } from '../search-item.model'
import { FilterService } from '../../shared/services/filter.service'
import { SortService } from '../../shared/services/sort.service'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  response: ISearchResponse

  constructor(public filter: FilterService, public sort: SortService) {
    this.response = response
  }

  trackByFn(index: number, item: ISearchItem) {
    return item.id
  }
}
