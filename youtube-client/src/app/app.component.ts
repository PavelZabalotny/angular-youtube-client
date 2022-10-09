import { Component } from '@angular/core'
import { ResultsService } from './shared/services/results.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client'

  constructor(private results: ResultsService) {
  }

  isShowResults() {
    return this.results.isShow
  }
}
