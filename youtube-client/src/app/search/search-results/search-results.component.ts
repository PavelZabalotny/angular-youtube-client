import { Component, OnInit } from '@angular/core'
import { ISearchResponse } from '../search-response.model'
import { response } from './mock-response.model'
import { ISearchItem } from '../search-item.model'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  response: ISearchResponse

  constructor() {
    this.response = response
  }

  ngOnInit(): void {
    console.log(this.response.items)
  }

  trackByFn(index: number, item: ISearchItem) {
    return item.id
  }

}
