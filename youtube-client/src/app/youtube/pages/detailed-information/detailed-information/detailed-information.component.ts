import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { IVideoItem } from '../../../models/video-item.model'
import { ResultsService } from '../../../services/results/results.service'

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent implements OnInit, OnDestroy {
  private sub: Subscription | undefined
  id: string = ''
  item!: IVideoItem
  dislikeCount = 333

  constructor(private activatedRoute: ActivatedRoute, private results: ResultsService) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.id = params['id']
      this.results.getVideoById(this.id).subscribe((video) => {
        this.item = <IVideoItem>video.items[0]
      })
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe()
  }
}
