import { Component, OnInit } from '@angular/core'
import { ISearchResponse } from '../search-response.model'
import { response } from './mock-response.model'
import { ISearchItem } from '../search-item.model'
import { FilterService } from '../../shared/services/filter.service'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  response: ISearchResponse

  constructor(public filter: FilterService) {
    this.response = response
  }

  ngOnInit(): void {
    console.log(this.response.items)
  }

  trackByFn(index: number, item: ISearchItem) {
    return item.id
  }

}
