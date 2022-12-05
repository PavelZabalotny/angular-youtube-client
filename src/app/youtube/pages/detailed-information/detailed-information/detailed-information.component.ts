import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { map, Subscription } from 'rxjs'
import { IVideoItem } from '../../../models/video-item.model'
import { ResultsService } from '../../../services/results/results.service'
import { selectStore } from '../../../../redux/selectors/store.selector'

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent implements OnInit, OnDestroy {
  private paramsSubscription: Subscription
  private storeSubscription: Subscription
  id: string = ''
  item!: IVideoItem
  dislikeCount = 333

  constructor(
    private activatedRoute: ActivatedRoute,
    private results: ResultsService,
    private store: Store,
  ) {
  }

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params) => {
      this.id = params['id']
      this.storeSubscription = this.store.select(selectStore).pipe(map((videos) => {
        const item = videos.find((video) => video.id === this.id)
        if (!item) {
          this.results.getVideoById(this.id).subscribe((video) => {
            this.item = <IVideoItem>video.items[0]
          })
        } else {
          this.item = item
        }

        return this.item
      })).subscribe()
    })
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe()
    this.storeSubscription.unsubscribe()
  }
}
