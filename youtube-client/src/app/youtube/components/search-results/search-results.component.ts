import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { FilterService } from '../../services/filter/filter.service'
import { SortService } from '../../services/sort/sort.service'
import { IVideoItem } from '../../models/video-item.model'
import { selectStore } from '../../../redux/selectors/store.selector'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  store$: Observable<IVideoItem[]> = this.store.select(selectStore)

  constructor(
    public filter: FilterService,
    public sort: SortService,
    private store: Store,
  ) {
  }

  trackByFn(index: number, item: IVideoItem) {
    return item.id
  }
}
