import { Component } from '@angular/core'
import { ResultsService } from '../../services/results/results.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private results: ResultsService) {
  }

  isShowResults() {
    return this.results.isShow
  }
}
