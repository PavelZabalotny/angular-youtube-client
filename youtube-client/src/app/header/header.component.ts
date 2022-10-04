import { Component } from '@angular/core'
import { animate, style, transition, trigger } from '@angular/animations'

const fadeInOut = trigger(
  'fadeInOut', [
    transition('void => *', [
      style({ opacity: 0 }),
      animate('0.5s', style({ opacity: 1 })),
    ]),
    transition('* => void', [
      animate('0.2s', style({ opacity: 0 })),
    ]),
  ],
)

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fadeInOut],
})
export class HeaderComponent {
  isFilterShown = false

  toggleShowFilter() {
    this.isFilterShown = !this.isFilterShown
  }
}
