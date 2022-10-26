import {
  Component, OnDestroy, OnInit,
} from '@angular/core'
import {
  debounceTime,
  distinctUntilChanged,
  map,
  mergeMap,
  Subscription,
  switchMap,
} from 'rxjs'
import { FilterService } from '../../services/filter/filter.service'
import { SortService } from '../../services/sort/sort.service'
import { ResultsService } from '../../services/results/results.service'
import { IVideoItem } from '../../models/video-item.model'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  items: IVideoItem[] = []
  subscription$!: Subscription

  constructor(
    public filter: FilterService,
    public sort: SortService,
    private results: ResultsService,
  ) {
  }

  trackByFn(index: number, item: IVideoItem) {
    return item.id
  }

  ngOnInit() {
    this.subscription$ = this.getVideo()
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe()
  }

  getVideo(): Subscription {
    return this.results.searchValue.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      mergeMap((value) => this.results.getSearchResult(value)),
      map((items) => this.results.getId(items)),
      switchMap((id) => this.results.getVideoItems(id)),
    ).subscribe((items) => {
      this.items = items
    })
  }
}
